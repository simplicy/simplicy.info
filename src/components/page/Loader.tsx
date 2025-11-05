import { Box } from '@mui/material';
import BlockLoader from '../../sacred/BlockLoader';
function Loader() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 2,
      transition: 'background-color 0.25s ease-in-out',
    }}>
      <BlockLoader mode={7} />
    </Box>
  );
}

export default Loader;
