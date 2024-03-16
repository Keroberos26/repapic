import React, { useState } from 'react';
import config from '../../config';
import { Alert, Button, Link, InputLabel, OutlinedInput } from '../../components';
import { useDocumentTitle } from '../../hooks';
import { FormControl, FormHelperText, IconButton, InputAdornment } from '@mui/material';
import { RiEyeCloseLine, RiEyeFill } from 'react-icons/ri';
import { FaAngleRight } from 'react-icons/fa6';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { GoogleIcon } from '../../components/Icons';

const Login = () => {
  useDocumentTitle('Đăng nhập');
  const schema = object().shape({
    email: string().email('Email không hợp lệ').required('Vui lòng nhập email'),
    password: string().required('Vui lòng nhập mật khẩu'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (credentials) => {
    const success = await login(credentials);
    if (success) navigate(config.routes.dashboard);
  };

  const handleGoogleLogin = async () => {
    const success = await loginWithGoogle();
    if (success) navigate(config.routes.dashboard);
    console.clear();
  };

  return (
    <div className="w-full max-lg:bg-white max-lg:rounded-2xl max-lg:py-10 max-lg:px-6 max-lg:shadow-sm">
      <div className="mb-10">
        <h4 className="mb-4 text-xl lg:text-2xl font-bold leading-[1.5]">Đăng nhập vào REPAPIC.</h4>
        <p className="text-sm">
          Người dùng mới?{' '}
          <Link to={config.routes.register} underline="hover" bold>
            Tạo tài khoản
          </Link>
        </p>
      </div>
      <form className="flex flex-col gap-5 none" onSubmit={handleSubmit(onSubmit)}>
        <FormControl variant="outlined" color="default" error={!!errors.email?.message}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput id="email" label="Email" {...register('email')} />
          {errors.email?.message && <FormHelperText>{errors.email?.message}</FormHelperText>}
        </FormControl>
        <FormControl variant="outlined" color="default" error={!!errors.password?.message}>
          <InputLabel htmlFor="password">Mật khẩu</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            label="Mật khẩu"
            {...register('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(event) => event.preventDefault()}
                  size="small"
                  edge="end"
                >
                  {showPassword ? <RiEyeFill /> : <RiEyeCloseLine />}
                </IconButton>
              </InputAdornment>
            }
          />
          {errors.password?.message && <FormHelperText>{errors.password?.message}</FormHelperText>}
        </FormControl>
        {error?.data?.message && <Alert severity="error">{error.data.message}</Alert>}
        <Link to={config.routes.forgotPassword} className="text-right" color="inherit" sx={{ fontSize: 14 }}>
          Quên mật khẩu?
        </Link>
        <Button
          type="submit"
          color="default"
          size="large"
          endIcon={<FaAngleRight />}
          sx={{ justifyContent: 'space-between' }}
          loading={loading}
        >
          Đăng nhập
        </Button>
      </form>
      <div className="flex items-center gap-2 my-4 text-sm text-fade before:bg-fade before:h-px before:w-full after:bg-fade after:h-px after:w-full">
        hoặc
      </div>
      <Button
        startIcon={<GoogleIcon />}
        variant="text"
        color="default"
        size="large"
        fullWidth
        onClick={handleGoogleLogin}
      >
        Đăng nhập với Google
      </Button>
    </div>
  );
};

export default Login;
