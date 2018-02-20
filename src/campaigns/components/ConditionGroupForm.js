import React, { Component } from 'react';
import { Form, Button, Row, Col, Alert } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { renderInput } from '../../shared/utils/form_components';
import { required } from '../../shared/utils/form_validations';
import CloudinaryFileUpload from '../../shared/components/CloudinaryFileUpload';

const FormItem = Form.Item;

class ConditionGroupForm extends Component {
  constructor(props) {
    super(props);

    this.state = { iconUrl: props.initialValues && props.initialValues.iconUrl || null };

    this.handleUploadWidget = this.handleUploadWidget.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    return this.props.onSubmit({ ...values, iconUrl: this.state.iconUrl });
  }

  handleUploadWidget() {
    window.cloudinary.openUploadWidget(
      { cloud_name: 'onemap-co', upload_preset: 'bztfvbid', tags: ['xmas'] },
      (err, result) => result && this.setState({ iconUrl: result[0].secure_url })
    );
  }

  render() {
    const { handleSubmit, error, submitting, onDelete } = this.props;

    return (
      <Form layout="vertical" onSubmit={handleSubmit(this.onSubmit)}>
        <Row type="flex" justify="end">
          <FormItem>
            <Button style={{ marginRight: 5 }}>
              <Link to="/campaigns">Cancel</Link>
            </Button>
            {onDelete &&
              <Button type="danger" ghost onClick={onDelete} style={{ marginRight: 5 }}>
                Delete
              </Button>
            }
            <Button loading={submitting} type="primary" htmlType="submit">Save</Button>
          </FormItem>
        </Row>

        {error && <Row><FormItem><Alert message={error} type="error" closable /></FormItem></Row>}

        <Row gutter={32}>
          <Col span={12}>
            <FormItem>
              <Col span={8} className="ant-form-item-label">
                <label>Title</label>
              </Col>
              <Col span={10}>
                <Field
                  name="title"
                  component={renderInput}
                  placeholder="Condition Group Name"
                  validate={required}
                />
              </Col>
            </FormItem>
            <FormItem>
              <Col span={8} className="ant-form-item-label">
                <label>Location latency</label>
              </Col>
              <Col span={10}>
                <Field
                  name="locationLat"
                  component={renderInput}
                  placeholder="Lat"
                  validate={required}
                  normalize={val => parseFloat(val)}
                />
              </Col>
            </FormItem>
            <FormItem>
              <Col span={8} className="ant-form-item-label">
                <label>Location long</label>
              </Col>
              <Col span={10}>
                <Field
                  name="locationLong"
                  component={renderInput}
                  placeholder="Long"
                  validate={required}
                  normalize={val => parseFloat(val)}
                />
              </Col>
            </FormItem>

            <FormItem>
              <Col span={8} className="ant-form-item-label">
                <label>Icon</label>
              </Col>
              <Col span={16}>
                <CloudinaryFileUpload
                  file={this.state.iconUrl}
                  onUpload={this.handleUploadWidget}
                  onDelete={() => this.setState({ iconUrl: null })}
                />
              </Col>
            </FormItem>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default reduxForm({ form: 'ConditionGroupForm' })(ConditionGroupForm);
