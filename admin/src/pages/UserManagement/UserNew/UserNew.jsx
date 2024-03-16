import { Container, FormControl, MenuItem, Switch } from '@mui/material';
import React from 'react';
import { Breadcrumbs, Button, InputLabel, Link, OutlinedInput, Paper, Select } from '../../../components';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import config from '../../../config';

const UserNew = () => {
  return (
    <Container>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h4 className="mb-2 text-2xl font-bold leading-[1.5]">Tạo người dùng mới</h4>
          <Breadcrumbs>
            <Link underline="hover" color="inherit" to={config.routes.dashboard}>
              Dashboard
            </Link>
            <Link underline="hover" color="inherit">
              Người dùng
            </Link>
            <span>Người dùng mới</span>
          </Breadcrumbs>
        </div>
      </div>
      <form className="grid grid-cols-3 gap-6">
        <div className="col-span-1">
          <Paper className="px-6 pt-20 pb-10">
            <div className="mb-10">
              <div className="size-32">Avatar Upload</div>
              <p className="text-xs text-center text-fade">
                Allowed *.jpeg, *.jpg, *.png, *.gif
                <br /> max size of 3 Mb
              </p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <h6 className="mb-1 font-semibold">Email đã xác thực</h6>
                <p>Việc tắt tính năng này sẽ tự động gửi cho người dùng email xác minh</p>
              </div>
              <Switch inputProps={{ 'aria-label': 'Switch verified' }} defaultChecked />
            </div>
          </Paper>
        </div>
        <div className="col-span-2">
          <Paper className="p-6">
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              <FormControl variant="outlined" color="default" required>
                <InputLabel htmlFor="firstName">Họ</InputLabel>
                <OutlinedInput id="firstName" label="Họ" />
              </FormControl>
              <FormControl variant="outlined" color="default" required>
                <InputLabel htmlFor="lastName">Tên</InputLabel>
                <OutlinedInput id="lastName" label="Tên" />
              </FormControl>
              <FormControl variant="outlined" color="default" required>
                <InputLabel htmlFor="email">Email</InputLabel>
                <OutlinedInput id="email" label="Email" />
              </FormControl>
              <FormControl variant="outlined" color="default">
                <InputLabel htmlFor="phone">Số điện thoại</InputLabel>
                <OutlinedInput id="phone" label="Số điện thoại" />
              </FormControl>
              <DatePicker
                label="Ngày sinh"
                format="DD/MM/YYYY"
                sx={{
                  fontSize: '0.875rem',
                  '& fieldset': {
                    borderColor: '#E0E3E7',
                    borderRadius: '8px',
                    transition: '0.1s',
                  },
                  '&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
                    borderWidth: 2,
                  },
                }}
              />
              <FormControl variant="outlined" color="default">
                <InputLabel htmlFor="gender">Giới tính</InputLabel>
                <Select id="gender" label="Giới tính">
                  <MenuItem value="male">Nam</MenuItem>
                  <MenuItem value="female">Nữ</MenuItem>
                  <MenuItem value="others">Khác</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" color="default">
                <InputLabel htmlFor="city">Thành phố / Tỉnh</InputLabel>
                <Select id="city" label="Thành phố / Tỉnh">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" color="default">
                <InputLabel htmlFor="district">Quận / Huyện</InputLabel>
                <Select id="district" label="Quận / Huyện">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" color="default">
                <InputLabel htmlFor="ward">Phường / Xã</InputLabel>
                <Select id="ward" label="Phường / Xã">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" color="default">
                <InputLabel htmlFor="street">Số nhà, tên đường</InputLabel>
                <OutlinedInput id="street" label="Số nhà, tên đường" />
              </FormControl>
            </div>
            <div className="mt-6 text-right">
              <Button color="default">Thêm người dùng</Button>
            </div>
          </Paper>
        </div>
      </form>
    </Container>
  );
};

export default UserNew;
