import { IconButton } from '@mui/material';
import React from 'react';
import { FaPencil } from 'react-icons/fa6';
import { IoTrash } from 'react-icons/io5';

const UpdateDelete = () => {
  return (
    <div className="flex items-center gap-1">
      <IconButton size="small">
        <FaPencil />
      </IconButton>
      <IconButton size="small" color="error">
        <IoTrash />
      </IconButton>
    </div>
  );
};

export default UpdateDelete;
