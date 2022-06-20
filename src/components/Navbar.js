import {
   AppBar,
   Toolbar,
   styled,
   Box,
   Typography,
   InputBase,
} from '@mui/material';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import PersonIcon from '@mui/icons-material/Person';

const StyledToolbar = styled(Toolbar)({
   display: 'flex',
   justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
   backgroundColor: 'white',
   padding: '0 10px',
   borderRadius: theme.shape.borderRadius,
   width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({}));

const Navbar = () => {
   return (
      <AppBar position="sticky">
         <StyledToolbar>
            <Typography
               variant="h5"
               sx={{ display: { xs: 'none', sm: 'block' }, paddingTop: 0 }}
            >
               Limitless
            </Typography>
            <AllInclusiveIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
            <Search>
               <InputBase placeholder="search term" />
            </Search>
            <Icons>
               <PersonIcon />
            </Icons>
         </StyledToolbar>
      </AppBar>
   );
};

export default Navbar;
