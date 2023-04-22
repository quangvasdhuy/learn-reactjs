import React from 'react';
import PropTypes from 'prop-types';
// import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
// import InputField from 'components/form-controls/InputField';
import { Avatar, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import InputField from 'components/form-controls/InputField';


RegisterForm.propTypes = {
    onsubmit: PropTypes.func,
};

function RegisterForm(props) {
    const form = useForm({
        defaultValue: {
            title: '',
        }
    })

    const handleSubmit = (value) => {
        console.log('TODO Form', value)
    }

    return (
        <div>
            <Avatar>
                <LockOutlined />
            </Avatar>
            <Typography component="h3" variant="h5">
                Sign up
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullname" label="Full name" form={form}/>
                <InputField name="email" label="Email" form={form}/>
                <InputField name="password" label="Password" form={form}/>
                <InputField name="retypePassword" label="Retype Password" form={form}/>
            </form>
        </div>
    );
}

export default RegisterForm;