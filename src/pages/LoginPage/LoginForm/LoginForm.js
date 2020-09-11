import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Link as MuiLink } from '@material-ui/core';
import Flex from 'components/Flex';
import ButtonProgress from 'components/ButtonProgress';
import PasswordInput from 'components/PasswordInput';

import useJwtAuth from '@gabrielgvl/jwt_auth_react';
import { Form } from './styles';
import { useLogin } from '../../../requests/auth';
import FormikTextField from '../../../components/FormikTextField';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('Informe o e-mail')
    .trim(),
  passwd: Yup.string().required('Informe a senha'),
});

const LoginForm = () => {
  const { handleLogin } = useJwtAuth();
  const [, login] = useLogin();

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
          const { data } = await login({ data: { email, passwd } });
          const { accessToken } = data;
          await handleLogin(accessToken);
        } catch (e) {
          console.log(e);
          setSubmitting(false);
        }
      }}
      validationSchema={validationSchema}
      validateOnBlur={false}
    >
      {({
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <FormikTextField
            label="E-mail"
            name="email"
            margin="normal"
            variant="standard"
            fullWidth
            type="email"
          />
          <PasswordInput
            label=" Senha"
            name="passwd"
            fullWidth
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
