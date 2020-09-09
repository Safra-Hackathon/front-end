import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { TextField, Button, Link as MuiLink } from '@material-ui/core';
import Flex from 'components/Flex';
import ButtonProgress from 'components/ButtonProgress';
import PasswordInput from 'components/PasswordInput';

import useJwtAuth from '@gabrielgvl/jwt_auth_react';
import { Form } from './styles';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('Informe o e-mail')
    .trim(),
  passwd: Yup.string().required('Informe a senha'),
});

const LoginForm = ({ history }) => {
  const { handleLogin } = useJwtAuth();
  const [login] = [];// useAxios();

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <Formik
      initialValues={{
        email: '',
        passwd: '',
      }}
      onSubmit={async ({ email, passwd }, { setSubmitting }) => {
        try {
          // const hashedPasswd = sha512(encodeURI(passwd));
          const { data } = await login({ variables: { email, passwd } });
          const { accessToken } = data.loginUser.loginResponse;
          await handleLogin(accessToken);
        } catch (e) {
          if (e.message.includes('Usuário não ativo')) {
            history.push({ pathname: '/active', state: { email } });
          }
          setSubmitting(false);
        }
      }}
      validationSchema={validationSchema}
      validateOnBlur={false}
    >
      {({
        values,
        handleSubmit,
        handleChange,
        handleBlur,
        errors,
        touched,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <TextField
            label="CPF"
            name="email"
            value={values.email}
            margin="normal"
            variant="standard"
            fullWidth
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={errors.email && touched.email ? errors.email : ''}
            error={!!errors.email && !!touched.email}
          />
          <PasswordInput
            label=" Senha"
            name="passwd"
            helperText={errors.passwd && touched.passwd ? errors.passwd : ''}
            error={Boolean(errors.passwd) && Boolean(touched.passwd)}
            fullWidth
            onChange={handleChange}
            value={values.passwd}
            onBlur={handleBlur}
          />
          <Flex fullWidth justifyEnd>
            <MuiLink color="primary" component={Link} to="/forgot-password">
              Esqueceu sua senha?
            </MuiLink>
          </Flex>

          <Flex justifyBetween className="mt-4">
            <ButtonProgress
              type="submit"
              color="primary"
              variant="contained"
              disabled={isSubmitting}
              style={{ width: '100%' }}
            >
              Entrar
            </ButtonProgress>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default withRouter(LoginForm);
