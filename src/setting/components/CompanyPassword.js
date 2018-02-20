import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Alert } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../../shared/utils/form_components';
import { required, password } from '../../shared/utils/form_validations';

const FormItem = Form.Item;

class CompanyPassword extends Component {
    render() {
        const { handleSubmit, error, submitting } = this.props;
        return (
            <div className="company-password">
                <Form layout="vertical" className="password-form" onSubmit={handleSubmit}>
                <div>
                    <Field
                        name="current_password"
                        label="Current Password"
                        component={renderInput}
                        placeholder=""
                        type="password"
                        validate={[required, password]}
                    />
                    </div>
                <div style={{marginTop:'30px'}}>
                    <Field
                        name="new_password"
                        label="New Password"
                        component={renderInput}
                        placeholder=""
                        type="password"
                        validate={[required, password]}
                    />
                    </div>
                <div style={{marginTop:'30px'}}>
                    <Field
                        name="confirm_password"
                        label="Confirm Password"
                        component={renderInput}
                        placeholder=""
                        type="password"
                        validate={[required, password]}
                    />
                    </div>
                    <FormItem>
                        <Button type="primary" loading={submitting} htmlType="submit" className="save-button">
                            Update Password
                        </Button>
                    </FormItem>
                </Form>
            </div>

        );
    }
}


export default reduxForm({ form: 'CompanyPassword' })(CompanyPassword);