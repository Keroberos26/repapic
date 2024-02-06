import React, { FC, useState } from 'react';
import { Button, Chip, Fade, IconButton, Modal } from '@mui/material';
import Box from './Box';
import { ProductType } from '../types';
import Image from './Image';
import CustomRating from './CustomRating';
import { formatPrice } from '../utils';
import CustomButton from './CustomButton';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { HeartIcon } from './Icons';
import { IoCloseOutline, IoShareSocialOutline } from 'react-icons/io5';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ProductQuickViewProps {
  open: boolean;
  data: ProductType;
  onClose: () => void;
}

const ProductQuickView: FC<ProductQuickViewProps> = ({ open, data, onClose }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Fade in={open}>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="bg-[#f5f5f7] p-5 w-[900px] h-[500px] overflow-auto relative">
            <div className="absolute top-0 right-0">
              <IconButton size="small" onClick={onClose}>
                <IoCloseOutline />
              </IconButton>
            </div>
            <Box type="shadow" className="grid p-5 lg:grid-cols-2 gap-7">
              <div className="overflow-hidden">
                <Swiper spaceBetween={20} slidesPerView={1}>
                  {data.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={image}
                        alt={data.title + index}
                        loading="lazy"
                        className="aspect-square border rounded-[5px]"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[18px] font-bold">{data.title}</h3>
                <div className="flex items-center gap-3">
                  <CustomRating value={data.rating} precision={0.25} size="small" />
                  <span className="text-sm">{data.rating.toFixed(1)}/5</span>
                </div>
                <div className="flex gap-4 item-center">
                  <span className="text-2xl font-bold">
                    {formatPrice(data.price - (data.price * data.discountPercentage) / 100)}
                  </span>
                  <del className="self-end text-fade">{formatPrice(data.price)}</del>
                  <Chip label={`${Math.round(data.discountPercentage)}%`} color="success" />
                </div>
                <p className="text-sm">{data.description}</p>
                <hr />
                <div className="flex items-stretch gap-3 ">
                  <div className="flex items-center border rounded-[5px]">
                    <IconButton size="small" onClick={handleDecrease}>
                      <FaMinus />
                    </IconButton>
                    <input
                      type="number"
                      name="quantity"
                      min={1}
                      className="flex-grow text-center outline-none max-w-[50px]"
                      readOnly
                      value={quantity}
                    />
                    <IconButton size="small" onClick={handleIncrease}>
                      <FaPlus />
                    </IconButton>
                  </div>
                  <CustomButton color="primary" rounded className="flex-grow">
                    Thêm vào giỏ hàng
                  </CustomButton>
                </div>
                <div className="flex items-center gap-5">
                  <Button startIcon={<HeartIcon />}>Yêu thích</Button>
                  <Button startIcon={<IoShareSocialOutline />}>Chia sẻ</Button>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default ProductQuickView;
