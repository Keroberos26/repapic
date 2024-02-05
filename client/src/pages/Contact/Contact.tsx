import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import Box from '../../components/Box';
import { TextField } from '@mui/material';
import CustomButton from '../../components/CustomButton';
import { FaHome, FaInfo, FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Contact = () => {
  return (
    <>
      <Breadcrumbs>
        <span>Liên hệ</span>
      </Breadcrumbs>
      <Container verticalAlign>
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.856168121187!2d108.25831637622312!3d15.968885884696222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142116949840599%3A0x365b35580f52e8d5!2zxJDhuqFpIGjhu41jIEZQVCDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1707143415764!5m2!1svi!2s"
          allowFullScreen={true}
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <Box type="shadow" className="my-10 p-[10px] md:py-5 lg:px-5 lg:py-[30px] grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="mb-4 text-xl font-bold">Liên lạc</h2>
            <form>
              <TextField label="Tên" variant="filled" size="small" fullWidth margin="dense" />
              <TextField label="Email" variant="filled" size="small" fullWidth margin="dense" required />
              <TextField label="Số điện thoại" variant="filled" size="small" fullWidth margin="dense" />
              <TextField label="Ghi chú" variant="filled" size="small" fullWidth margin="dense" multiline rows={3} />
              <CustomButton color="primary" rounded className="mt-1">
                Gửi
              </CustomButton>
            </form>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold">Liên hệ với chúng tôi</h2>
            <ul className="flex flex-col gap-4 text-fade">
              <li className="flex items-center gap-4">
                <FaHome />
                <span>Đại học FPT, Đà Nẵng, Việt Nam</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt />
                <span>(+00) 123-456-789</span>
              </li>
              <li className="flex items-center gap-4">
                <IoMdMail />
                <span>repapic@hotmail.com</span>
              </li>
              <li className="flex items-center gap-4">
                <FaInfo />
                <span>Thứ 2 - Thứ 6 (8:00 AM - 8:00 PM)</span>
              </li>
            </ul>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default Contact;
