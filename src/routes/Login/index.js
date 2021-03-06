import React from 'react';
import { InputField } from 'bumbag';
import AuthLayout from '../../components/AuthLayout';

const Login = () => {
  return (
    <AuthLayout buttonText="Login" title="Login">
      <InputField
        label="Username"
        placeholder="Enter your username here..."
        marginTop="16px"
        width="100%"
      />
      <InputField
        label="Password"
        placeholder="Enter your password here..."
        marginTop="18px"
        marginBottom="16px"
        type="password"
        width="100%"
      />
    </AuthLayout>
  );
};

export default Login;
