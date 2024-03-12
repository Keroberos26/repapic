import React, { useState } from 'react';
import config from '../../config';
import { Button, Link, InputLabel, OutlinedInput } from '../../components';
import { useDocumentTitle } from '../../hooks';
import { Alert, FormControl, FormHelperText, IconButton, InputAdornment } from '@mui/material';
import { RiEyeCloseLine, RiEyeFill } from 'react-icons/ri';
import { FaAngleRight } from 'react-icons/fa6';
import api from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Register = () => {
  useDocumentTitle('Đăng ký');
  const schema = object().shape({
    firstName: string().required('Vui lòng nhập họ').min(2, 'Vui lòng nhập ít nhất 2 kí tự'),
    lastName: string().required('Vui lòng nhập họ').min(2, 'Vui lòng nhập ít nhất 2 kí tự'),
    email: string().email('Email không hợp lệ').required('Vui lòng nhập email'),
    password: string()
      .required('Vui lòng nhập mật khẩu')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/,
        'Mật khẩu từ 8 - 32 kí tự gồm ít nhất 1 chữ thường, 1 chữ hoa, 1 số, 1 kí tự đặc biệt',
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = (data) => {
    api
      .post('/auth/register', data)
      .then(() => navigate(config.routes.login))
      .catch((err) => setError(err.response?.data?.message));
  };

  return (
    <div className="w-full max-lg:bg-white max-lg:rounded-2xl max-lg:py-10 max-lg:px-6 max-lg:shadow-sm">
      <div className="mb-10">
        <h4 className="mb-4 text-xl lg:text-2xl font-bold leading-[1.5]">Bắt đầu hoàn toàn miễn phí</h4>
        <p className="text-sm">
          Bạn đã có tài khoản?{' '}
          <Link to={config.routes.login} bold underline="hover">
            Đăng nhập ngay
          </Link>
        </p>
      </div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 sm:gap-4 sm:flex-row">
          <FormControl variant="outlined" color="default" error={!!errors.firstName?.message}>
            <InputLabel htmlFor="firstName">Họ</InputLabel>
            <OutlinedInput id="firstName" label="Họ" {...register('firstName')} />
            {errors.firstName?.message && <FormHelperText>{errors.firstName?.message}</FormHelperText>}
          </FormControl>
          <FormControl variant="outlined" color="default" error={!!errors.lastName?.message}>
            <InputLabel htmlFor="lastName">Tên</InputLabel>
            <OutlinedInput id="lastName" label="Tên" {...register('lastName')} />
            {errors.lastName?.message && <FormHelperText>{errors.lastName?.message}</FormHelperText>}
          </FormControl>
        </div>
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
        {error && <Alert severity="error">{error}</Alert>}
        <Button
          type="submit"
          size="large"
          color="default"
          endIcon={<FaAngleRight />}
          sx={{ justifyContent: 'space-between' }}
        >
          Tạo tài khoản
        </Button>
        <p className="text-xs text-center text-fade leading-[1.5]">
          Bằng cách đăng ký, tôi đồng ý với{' '}
          <Link color="inherit" className="text-[1em]">
            Điều khoản dịch vụ
          </Link>{' '}
          và{' '}
          <Link color="inherit" className="text-[1em]">
            Chính sách quyền riêng tư
          </Link>
          .
        </p>
      </form>
    </div>
  );
};

export default Register;
