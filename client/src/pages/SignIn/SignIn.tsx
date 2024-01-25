import React, { useContext, useEffect, useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Link, useNavigate } from 'react-router-dom';
import Box from '../../components/Box';
import Container from '../../components/Container';
import { Button, Checkbox, FormControlLabel, IconButton, InputAdornment, TextField } from '@mui/material';
import CustomButton from '../../components/CustomButton';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { AuthContext } from '../../context/AuthProvider';
import axios from 'axios';
import config from '../../config';
import { GoogleIcon } from '../../components/Icons';

const SignIn = () => {
  const { loading, error, dispatch } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errorCredentials, setErrorCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [event.target.id]: event.target.value }));

    if ((event.target.id === 'password' || event.target.id === 'username') && errorCredentials[event.target.id]) {
      setErrorCredentials((prev) => ({ ...prev, [event.target.id]: '' }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (credentials.username && credentials.password) {
      dispatch({ type: 'LOGIN_START' });
      axios
        .post('/auth/login', credentials)
        .then((res) => {
          dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
          navigate(config.routes.home);
        })
        .catch((err) => dispatch({ type: 'LOGIN_FAILURE', payload: err.response }));
    } else {
      if (!credentials.username) {
        setErrorCredentials((prev) => ({ ...prev, username: 'Vui lòng nhập email' }));
      }
      if (!credentials.password) {
        setErrorCredentials((prev) => ({ ...prev, password: 'Vui lòng nhập mật khẩu' }));
      }
    }
  };

  useEffect(() => {
    if (error) {
      if (error.status === 400) {
        setErrorCredentials((prev) => ({ ...prev, password: error.data.message }));
      }
    }
  }, [error]);

  return (
    <>
      <Breadcrumbs>
        <Link to={''}>Tài khoản</Link>
        <span>Đăng nhập</span>
      </Breadcrumbs>
      <Container verticalAlign>
        <div className="flex justify-center">
          <Box type="shadow" className="w-[500px] max-w-full p-5 md:p-6 lg:p-7">
            <h1 className="mb-5 text-xl font-bold text-center">Đăng nhập</h1>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <TextField
                error={!!errorCredentials.username}
                helperText={errorCredentials.username}
                variant="standard"
                type="text"
                label="Email"
                fullWidth
                size="small"
                color="secondary"
                id="username"
                value={credentials.username}
                onChange={handleChange}
              />
              <TextField
                error={!!errorCredentials.password}
                helperText={errorCredentials.password}
                variant="standard"
                type={showPassword ? 'text' : 'password'}
                label="Mật khẩu"
                fullWidth
                size="small"
                color="secondary"
                id="password"
                value={credentials.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} size="small">
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <div className="flex items-center justify-between">
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label={<span className="text-sm">Nhớ mật khẩu</span>}
                  sx={{ fontSize: '14px' }}
                />
                <Link to={''} className="text-sm hover:underline">
                  Quên mật khẩu?
                </Link>
              </div>
              <div className="text-center">
                <CustomButton color="primary" rounded loading={loading} disabled={loading}>
                  Đăng nhập
                </CustomButton>
              </div>
              <div className="flex items-center gap-3 after:w-full after:h-[1px] after:block after:bg-fade before:w-full before:h-[1px] before:block before:bg-fade">
                <span className="text-xs text-center text-fade text-nowrap">Hoặc đăng nhập với</span>
              </div>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<GoogleIcon />}
                sx={{ textTransform: 'unset' }}
                fullWidth
              >
                Tiếp tục với Google
              </Button>
            </form>
          </Box>
        </div>
      </Container>
    </>
  );
};

export default SignIn;
