import React, { useState } from 'react';
import CustomButton from './CustomButton';
import { FaAngleDown } from 'react-icons/fa6';
import { Menu, MenuItem } from '@mui/material';

interface Option {
  label: string;
  value: any;
}

interface CustomSelectProps {
  options: Option[];
  onChange?: (value: any) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, onChange }) => {
  const [selectLabel, setSelectLabel] = useState<string>(options[0]?.label || '');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (option: Option) => {
    setSelectLabel(option.label);
    if (onChange) {
      onChange(option.value);
    }
    handleClose();
  };

  return (
    <>
      <CustomButton
        onClick={handleClick}
        color="select"
        justify="between"
        rightIcon={<FaAngleDown />}
        rounded
        className="px-4"
        size="small"
      >
        {selectLabel}
      </CustomButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {options?.map((option, index) => (
          <MenuItem key={index} onClick={() => handleChange(option)}>
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CustomSelect;
