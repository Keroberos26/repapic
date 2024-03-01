import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const CustomButton = styled(Button)({
  borderRadius: 8,
  textTransform: 'unset',
  fontWeight: 700,
  fontSize: 15,
  height: 48,
  minWidth: 64,
  paddingBlock: 8,
  paddingRight: 12,
  lineHeight: 1.71429,
});

export default CustomButton;
