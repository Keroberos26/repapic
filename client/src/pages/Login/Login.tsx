import { useState } from 'react';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput } from '@mui/material';
import { RiEyeCloseLine, RiEyeFill } from 'react-icons/ri';
import { FaAngleRight } from 'react-icons/fa6';
import config from '../../config';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-lg:bg-white max-lg:rounded-2xl max-lg:py-10 max-lg:px-6 max-lg:shadow-sm">
      <div className="mb-10">
        <h4 className="mb-4 text-xl lg:text-2xl font-bold leading-[1.5]">Đăng nhập vào Repapic</h4>
        <p className="text-sm">
          Người dùng mới?{' '}
          <Link href={config.routes.register} underline="hover" fontWeight={600}>
            Tạo tài khoản
          </Link>
        </p>
      </div>
      <form className="flex flex-col gap-5 none">
        <FormControl variant="outlined" color="default">
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput id="email" label="Email" />
        </FormControl>
        <FormControl variant="outlined" color="default">
          <InputLabel htmlFor="password">Mật khẩu</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            label="Mật khẩu"
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
        </FormControl>
        <Link
          href={config.routes.forgotPassword}
          className="text-right"
          color="inherit"
          underline="always"
          sx={{ fontSize: 14 }}
        >
          Quên mật khẩu?
        </Link>
        <Button
          type="submit"
          color="default"
          size="large"
          endIcon={<FaAngleRight />}
          sx={{ justifyContent: 'space-between', paddingInline: 2 }}
        >
          Đăng nhập
        </Button>
      </form>
    </div>
  );
};

export default Login;
