import { Container, FormControl, FormHelperText, MenuItem, Switch } from '@mui/material';
import React, { useState } from 'react';
import { AvatarUpload, Breadcrumbs, Button, InputLabel, Link, OutlinedInput, Paper, Select } from '../../../components';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import config from '../../../config';
import { useDocumentTitle, useFetch } from '../../../hooks';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../../utils/api';

const UserNew = () => {
  useDocumentTitle('Tạo người dùng mới');
  const schema = object().shape({
    email: string().email('Email không hợp lệ').required('Vui lòng nhập email'),
    name: string().required('Vui lòng nhập họ tên của bạn').min(2, 'Họ tên phải có ít nhất 2 kí tự'),
    phone: string().matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Số điện thoại không hợp lệ'),
    // dOB: string(),
    // gender: string().oneOf(['', 'male', 'female', 'others'], 'Giới tính không hợp lệ').default(''),
    city: string(),
    district: string(),
    ward: string(),
    street: string(),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('avatar', avatar);
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    try {
      const response = await api.post('/users', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // API address
  const { data: cities } = useFetch('/address/cities');
  const city = watch('city');
  const { data: districts } = useFetch(city ? `/address/districts?city=${city}` : '');
  const district = watch('district');
  const { data: wards } = useFetch(city ? `/address/wards?district=${district}` : '');

  const [avatar, setAvatar] = useState(null);

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
      <form className="grid grid-cols-3 gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-span-1">
          <Paper className="px-6 pt-20 pb-10">
            <div className="mb-10">
              <AvatarUpload className="mx-auto" onChange={setAvatar} />
              <p className="mt-6 text-xs text-center text-fader">
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
              <FormControl variant="outlined" color="default" className="col-span-2" error={!!errors.email?.message}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <OutlinedInput id="email" label="Email" {...register('email')} />
                {errors.email?.message && <FormHelperText>{errors.email?.message}</FormHelperText>}
              </FormControl>
              <FormControl variant="outlined" color="default" error={!!errors.name?.message}>
                <InputLabel htmlFor="name">Họ tên</InputLabel>
                <OutlinedInput id="name" label="Họ tên" {...register('name')} />
                {errors.name?.message && <FormHelperText>{errors.name?.message}</FormHelperText>}
              </FormControl>
              <FormControl variant="outlined" color="default" error={!!errors.phone?.message}>
                <InputLabel htmlFor="phone">Số điện thoại</InputLabel>
                <OutlinedInput id="phone" label="Số điện thoại" {...register('phone')} />
                {errors.phone?.message && <FormHelperText>{errors.phone?.message}</FormHelperText>}
              </FormControl>
              {/* <DatePicker
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
                <Select id="gender" label="Giới tính" defaultValue="" {...register('gender')}>
                  <MenuItem value="" disabled>
                    <em>Chọn giới tính</em>
                  </MenuItem>
                  <MenuItem value="male">Nam</MenuItem>
                  <MenuItem value="female">Nữ</MenuItem>
                  <MenuItem value="others">Khác</MenuItem>
                </Select>
              </FormControl> */}
              <FormControl variant="outlined" color="default">
                <InputLabel htmlFor="city">Thành phố / Tỉnh</InputLabel>
                <Select id="city" label="Thành phố / Tỉnh" defaultValue="" {...register('city')}>
                  <MenuItem value="" disabled>
                    <em>Chọn tỉnh thành</em>
                  </MenuItem>
                  {cities?.map((city) => (
                    <MenuItem value={city.code} key={city.code}>
                      {city.name_with_type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined" color="default">
                <InputLabel htmlFor="district">Quận / Huyện</InputLabel>
                <Select id="district" label="Quận / Huyện" defaultValue="" {...register('district')}>
                  <MenuItem value="" disabled>
                    <em>Chọn quận huyện</em>
                  </MenuItem>
                  {districts?.map((district) => (
                    <MenuItem value={district.code} key={district.code}>
                      {district.name_with_type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined" color="default">
                <InputLabel htmlFor="ward">Phường / Xã</InputLabel>
                <Select id="ward" label="Phường / Xã" defaultValue="" {...register('ward')}>
                  <MenuItem value="" disabled>
                    <em>Chọn phường xã</em>
                  </MenuItem>
                  {wards?.map((ward) => (
                    <MenuItem value={ward.code} key={ward.code}>
                      {ward.name_with_type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined" color="default">
                <InputLabel htmlFor="street">Số nhà, tên đường</InputLabel>
                <OutlinedInput id="street" label="Số nhà, tên đường" {...register('street')} />
              </FormControl>
            </div>
            <div className="mt-6 text-right">
              <Button color="default" type="submit">
                Thêm người dùng
              </Button>
            </div>
          </Paper>
        </div>
      </form>
    </Container>
  );
};

export default UserNew;
