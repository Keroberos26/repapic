import { OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomOutlinedInput = styled(OutlinedInput)({
  '&': {
    fontSize: '0.875rem',
    '& fieldset': {
      borderColor: '#E0E3E7',
      borderRadius: '8px',
      transition: '0.1s',
    },
    '&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
      borderWidth: 2,
    },
  },
});

export default CustomOutlinedInput;
