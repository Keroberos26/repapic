import React, { useState } from 'react';
import config from '../../config';
import { Button, Link, InputLabel, OutlinedInput } from '../../components';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { FormControl, FormHelperText, IconButton, InputAdornment } from '@mui/material';
import { RiEyeCloseLine, RiEyeFill } from 'react-icons/ri';
import { FaAngleRight } from 'react-icons/fa6';

const Login = () => {
  useDocumentTitle('Đăng nhập | REPAPIC.');
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [errorCredentials, setErrorCredentials] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setCredentials((prev) => ({ ...prev, [event.target.id]: event.target.value }));

    if (errorCredentials[event.target.id]) {
      setErrorCredentials((prev) => ({ ...prev, [event.target.id]: '' }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!credentials.email) {
      setErrorCredentials((prev) => ({ ...prev, email: 'Vui lòng nhập email' }));
    }
    if (!credentials.password) {
      setErrorCredentials((prev) => ({ ...prev, password: 'Vui lòng nhập mật khẩu' }));
    }
    console.log(errorCredentials);
  };

  return (
    <div className="w-[352px]">
      <div className="mb-10">
        <h4 className="mb-4 text-2xl font-bold leading-[1.5]">Đăng nhập vào REPAPIC.</h4>
        <p className="text-sm">
          Người dùng mới?{' '}
          <Link to={config.routes.register} underline="hover" bold>
            Tạo tài khoản
          </Link>
        </p>
      </div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
        <Link to={config.routes.forgotPassword} className="text-right" color="inherit" sx={{ fontSize: 14 }}>
          Quên mật khẩu?
        </Link>
        <Button
          type="submit"
          variant="contained"
          color="default"
          endIcon={<FaAngleRight />}
          sx={{ justifyContent: 'space-between' }}
        >
          Đăng nhập
        </Button>
      </form>
    </div>
  );
};

export default Login;
