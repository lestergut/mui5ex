import Box from '@mui/material/Box';

const Rightbar = () => {
   return (
      <Box
         bgcolor="lightcoral"
         flex={2}
         p={0}
         sx={{ display: { xs: 'none', sm: 'block' } }}
      >
         <h1>Rightbar</h1>
      </Box>
   );
};

export default Rightbar;
