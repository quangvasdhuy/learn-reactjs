import React from 'react';
import PropTypes from 'prop-types';
// import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import InputField from 'components/form-controls/InputField';

TodoForm.propTypes = {
    onsubmit: PropTypes.func,
};

function TodoForm(props) {
    const form = useForm({
        defaultValue: {
            title: '',
        }
    })

    const handleSubmit = (value) =>{
        console.log('TODO Form', value)
    }

    return (
        <form onSubmit = {form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Todo" form={form}></InputField>
        </form>
    );
}

export default TodoForm;