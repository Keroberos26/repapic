import React, { useState } from 'react';
import config from '../../config';
import { Button, Link, InputLabel, OutlinedInput } from '../../components';
import { useDocumentTitle } from '../../hooks';
import { FormControl, FormHelperText, IconButton, InputAdornment } from '@mui/material';
import { RiEyeCloseLine, RiEyeFill } from 'react-icons/ri';
import { FaAngleRight } from 'react-icons/fa6';

const Register = () => {
  useDocumentTitle('Đăng ký');
  const [credentials, setCredentials] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [errorCredentials, setErrorCredentials] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setCredentials((prev) => ({ ...prev, [event.target.id]: event.target.value }));

    if (errorCredentials[event.target.id]) {
      setErrorCredentials((prev) => ({ ...prev, [event.target.id]: '' }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!credentials.firstName) {
      setErrorCredentials((prev) => ({ ...prev, firstName: 'Vui lòng nhập họ' }));
    }
    if (!credentials.lastName) {
      setErrorCredentials((prev) => ({ ...prev, lastName: 'Vui lòng nhập tên' }));
    }
    if (!credentials.email) {
      setErrorCredentials((prev) => ({ ...prev, email: 'Vui lòng nhập email' }));
    }
    if (!credentials.password) {
      setErrorCredentials((prev) => ({ ...prev, password: 'Vui lòng nhập mật khẩu' }));
    }
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
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 sm:gap-4 sm:flex-row">
          <FormControl variant="outlined" color="default" error={!!errorCredentials.firstName}>
            <InputLabel htmlFor="firstName">Họ</InputLabel>
            <OutlinedInput id="firstName" label="Họ" value={credentials.firstName} onChange={handleChange} />
            {errorCredentials.firstName && <FormHelperText>{errorCredentials.firstName}</FormHelperText>}
          </FormControl>
          <FormControl variant="outlined" color="default" error={!!errorCredentials.lastName}>
            <InputLabel htmlFor="lastName">Tên</InputLabel>
            <OutlinedInput id="lastName" label="Tên" value={credentials.lastName} onChange={handleChange} />
            {errorCredentials.lastName && <FormHelperText>{errorCredentials.lastName}</FormHelperText>}
          </FormControl>
        </div>
        <FormControl variant="outlined" color="default" error={!!errorCredentials.email}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput id="email" label="Email" value={credentials.email} onChange={handleChange} />
          {errorCredentials.email && <FormHelperText>{errorCredentials.email}</FormHelperText>}
        </FormControl>
        <FormControl variant="outlined" color="default" error={!!errorCredentials.password}>
          <InputLabel htmlFor="password">Mật khẩu</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            label="Mật khẩu"
            value={credentials.password}
            onChange={handleChange}
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
          {errorCredentials.password && <FormHelperText>{errorCredentials.password}</FormHelperText>}
        </FormControl>
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
