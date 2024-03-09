import { Menu } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledMenu = styled(Menu)({
  '& .MuiPaper-root': {
    fontSize: 14,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    maxWidth: 220,
    minWidth: 132,

    '& .MuiList-root': {
      padding: 0,
      color: '#212B36',

      '& .MuiMenuItem-root': {
        fontSize: 14,
        lineHeight: '22px',
        color: '#212B36',
        borderRadius: 6,
        paddingInline: 8,
      },
    },
  },
});

export default StyledMenu;
