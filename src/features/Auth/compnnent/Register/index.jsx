import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm/index,';

Register.propTypes = {
    
};

function Register(props) {
    const handleSubmit = (value) => {
        console.log('Form submit', value);
    }
    return (
        <div>
            <RegisterForm onsubmit={handleSubmit}></RegisterForm>
        </div>
    );
}

export default Register;