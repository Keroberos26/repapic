import { Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-flexContainer': {
    '& .MuiButtonBase-root': {
      fontSize: 14,
      fontWeight: 600,
      textTransform: 'none',
      color: '#637381',
      height: 48,

      '&.Mui-selected': {
        color: '#212B36',
      },
    },
  },
  '& .MuiTabs-indicator': {
    backgroundColor: '#212B36',
  },
});

export default StyledTabs;
