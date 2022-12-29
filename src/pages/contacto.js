import React, { useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import Typography from '../components/common/Typography';
import Layout from '../components/Layout';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FormWrapper = styled.form``;

const StyledInput = styled.input``;

const StyledTextArea = styled.textarea``;

const InputWrapper = styled.div`
  display: flex;
  column-gap: 1rem;
  margin: 1rem 0;
`;

const navOptions = [
  { link: '/', text: 'Inicio' },
  { link: '/contacto', text: 'Contacto' },
];

/* const Contacto = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, message);
  };

  return (
    <Layout navOptions={navOptions}>
      <Wrapper>
        <Typography>Formulario de contacto</Typography>
        <FormWrapper onSubmit={handleSubmit}>
          <InputWrapper>
            <StyledInput
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='name'>Nombre</label>
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='email'>Correo</label>
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              type='tel'
              id='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor='phone'>Teléfono</label>
          </InputWrapper>
          <InputWrapper>
            <StyledTextArea
              type='text'
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message'>Mensaje</label>
          </InputWrapper>
          <button type='submit'>Enviar</button>
        </FormWrapper>
      </Wrapper>
    </Layout>
  );
}; */

/* const Contacto = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    //const data = {};
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      child: {
        name: formData.get('childName'),
        age: formData.get('childAge'),
        email: formData.get('childEmail'),
      },
    };
    // for (let [key, value] of formData.entries()) {
    //   data[key] = value;
    // }
    console.log('data', data);
  };

  return (
    <Layout navOptions={navOptions}>
      <Wrapper>
        <Typography>Formulario de contacto</Typography>
        <FormWrapper onSubmit={handleSubmit} ref={formRef}>
          <InputWrapper>
            <StyledInput type='text' id='name' name='name' />
            <label htmlFor='name'>Nombre</label>
          </InputWrapper>
          <InputWrapper>
            <StyledInput type='email' id='email' name='email' />
            <label htmlFor='email'>Correo</label>
          </InputWrapper>
          <InputWrapper>
            <StyledInput type='tel' id='phone' name='phone' />
            <label htmlFor='phone'>Teléfono</label>
          </InputWrapper>
          <InputWrapper>
            <StyledInput type='text' id='childName' name='childName' />
            <label htmlFor='childName'>Nombre del niño</label>
          </InputWrapper>
          <InputWrapper>
            <StyledInput type='text' id='childAge' name='childAge' />
            <label htmlFor='childAge'>Edad del niño</label>
          </InputWrapper>
          <InputWrapper>
            <StyledInput type='email' id='childEmail' name='childEmail' required/>
            <label htmlFor='childEmail'>Correo del niño</label>
          </InputWrapper>
          <InputWrapper>
            <StyledTextArea type='text' id='message' name='message' />
            <label htmlFor='message'>Mensaje</label>
          </InputWrapper>
          <button type='submit'>Enviar</button>
        </FormWrapper>
      </Wrapper>
    </Layout>
  );
}; */
const Contacto = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es requerido'),
    email: Yup.string()
      .email('El correo no es válido')
      .required('El correo es requerido'),
    phone: Yup.string().required('El teléfono es requerido'),
    message: Yup.string().required('El mensaje es requerido'),
    childName: Yup.string().required('El nombre del niño es requerido'),
    childAge: Yup.number()
      .min(1, 'La edad debe ser mayor a 0')
      .max(18, 'La edad debe ser menor a 18')
      .required('La edad es requerida'),
    childEmail: Yup.string()
      .email('El correo no es válido')
      .required('El correo es requerido'),
  });

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
    childName: '',
    childAge: '',
    childEmail: '',
  };

  const handleSubmit = async (values) => {
    console.log('values', values);
  };

  const renderError = (message) => <p className='text-danger'>{message}</p>;

  return (
    <Layout navOptions={navOptions}>
      <Wrapper>
        <Typography>Formulario de contacto</Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            await handleSubmit(values);
            resetForm();
          }}
        >
          <Form>
            <InputWrapper>
              <Field type='text' id='name' name='name' placeholder='Nombre' />
              <label htmlFor='name'>Nombre</label>
            </InputWrapper>
            <ErrorMessage name='name' render={renderError} />
            <InputWrapper>
              <Field
                type='email'
                id='email'
                name='email'
                placeholder='Correo'
              />
              <label htmlFor='email'>Correo</label>
            </InputWrapper>
            <ErrorMessage name='email' render={renderError} />
            <InputWrapper>
              <Field
                type='tel'
                id='phone'
                name='phone'
                placeholder='Teléfono'
              />
              <label htmlFor='phone'>Teléfono</label>
            </InputWrapper>
            <ErrorMessage name='phone' render={renderError} />
            <InputWrapper>
              <Field
                type='text'
                id='childName'
                name='childName'
                placeholder='Nombre del niño'
              />
              <label htmlFor='childName'>Nombre del niño</label>
            </InputWrapper>
            <ErrorMessage name='childName' render={renderError} />
            <InputWrapper>
              <Field
                type='text'
                id='childAge'
                name='childAge'
                placeholder='Edad del niño'
              />
              <label htmlFor='childAge'>Edad del niño</label>
            </InputWrapper>
            <ErrorMessage name='childAge' render={renderError} />
            <InputWrapper>
              <Field
                type='email'
                id='childEmail'
                name='childEmail'
                placeholder='Correo del niño'
              />
              <label htmlFor='childEmail'>Correo del niño</label>
            </InputWrapper>
            <ErrorMessage name='childEmail' render={renderError} />
            <InputWrapper>
              <Field
                as='textarea'
                type='text'
                id='message'
                name='message'
                placeholder='Mensaje'
              />
              <label htmlFor='message'>Mensaje</label>
            </InputWrapper>
            <ErrorMessage name='message' render={renderError} />
            <button type='submit'>Enviar</button>
          </Form>
        </Formik>
      </Wrapper>
    </Layout>
  );
};

export default Contacto;
