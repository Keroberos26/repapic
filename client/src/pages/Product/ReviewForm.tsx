import React, { useState } from 'react';
import { Button, IconButton, Modal, TextField } from '@mui/material';
import { IoClose } from 'react-icons/io5';
import CustomRating from '../../components/CustomRating';

const ReviewForm = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string>('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if (rating) {
      console.log(rating, comment);
    }
  };

  return (
    <>
      <Button variant="text" sx={{ color: 'var(--primary-color)' }} onClick={handleOpen}>
        Viết đánh giá
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 px-4 w-[600px] max-w-full">
          <div className=" bg-white rounded-[20px] w-full p-3">
            <h3 className="flex items-center justify-between p-2 text-3xl font-bold border-b">
              <span>Viết đánh giá</span>
              <IconButton onClick={handleClose}>
                <IoClose />
              </IconButton>
            </h3>
            <div className="px-2 py-3">
              <form onSubmit={handleSubmit}>
                <div className="flex items-center mb-3">
                  <span className="mr-4">Bạn có hài lòng với sản phẩm?</span>
                  <CustomRating value={rating} size="large" onChange={(event, newValue) => setRating(newValue)} />
                </div>
                <TextField
                  multiline
                  placeholder="Chia sẻ trải nghiệm của bạn (Không bắt buộc)"
                  className="w-full"
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                  minRows={3}
                />
                <div className="mt-3 text-right">
                  <Button type="submit" sx={{ color: 'var(--primary-color)' }} disabled={!rating}>
                    Đăng
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ReviewForm;
