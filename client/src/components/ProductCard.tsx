import { Checkbox, IconButton, Link, Paper, Tooltip } from '@mui/material';
import { CartPlusIcon, HeartIcon } from './Icons';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa6';

const actionVariants = {
  initial: {
    x: -40,
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.25,
      staggerChildren: 0.1,
    },
  },
};

const ProductCard = () => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Paper onMouseLeave={() => setHover(false)} onMouseOver={() => setHover(true)}>
      <div className="p-2">
        <div className="relative overflow-hidden">
          <img
            src="https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_6.jpg"
            alt="Product"
            className="w-full aspect-square rounded-xl"
          />
          <motion.div
            className="absolute flex flex-col gap-1 left-1 top-1"
            variants={actionVariants}
            animate={hover ? 'animate' : 'initial'}
          >
            <motion.span variants={actionVariants}>
              <Tooltip title="Yêu thích" placement="right" arrow>
                <Checkbox icon={<HeartIcon />} checkedIcon={<HeartIcon />} color="error" size="small" />
              </Tooltip>
            </motion.span>
            <motion.span variants={actionVariants}>
              <Tooltip title="Thêm giỏ hàng" placement="right" arrow>
                <IconButton size="small">
                  <CartPlusIcon />
                </IconButton>
              </Tooltip>
            </motion.span>
            <motion.span variants={actionVariants}>
              <Tooltip title="Xem nhanh" placement="right" arrow>
                <IconButton size="small">
                  <FaEye />
                </IconButton>
              </Tooltip>
            </motion.span>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col gap-5 px-6 pt-4 pb-6">
        <Link color="inherit" fontWeight={600}>
          Zoom Freak 2
        </Link>
        <div className="flex justify-end gap-1 font-semibold">
          <del className="text-fader">76,24 ₫</del>
          <span>25,18 ₫</span>
        </div>
      </div>
    </Paper>
  );
};

export default ProductCard;
