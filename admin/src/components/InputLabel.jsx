import { InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomInputLabel = styled(InputLabel)({
  '&': {
    fontSize: '0.875rem',
    color: '#919eab',
  },
  '&.Mui-focused': {
    fontSize: '1rem',
    fontWeight: 600,
    opacity: 1,
  },
});

export default CustomInputLabel;
