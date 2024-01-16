import { styled } from '@mui/material/styles';
import { Rating } from '@mui/material';
import React from 'react';
import { CloverIcon } from './Icon';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: 'green',
  },
  '& .MuiRating-iconHover': {
    color: 'green',
  },
});

interface CustomRatingProps {
  value?: number | any;
  defaultValue?: number;
  precision?: number;
  readOnly?: boolean;
  size?: 'small' | 'large';
  onChange?: () => void;
}

const CustomRating: React.FC<CustomRatingProps> = ({ value, defaultValue, precision, readOnly, size, onChange }) => {
  return (
    <StyledRating
      defaultValue={defaultValue}
      value={value}
      precision={precision}
      icon={<CloverIcon fillCurrent />}
      emptyIcon={<CloverIcon />}
      readOnly={readOnly}
      size={size}
      onChange={onChange}
    />
  );
};

export default CustomRating;
