import {
   AppBar,
   Toolbar,
   styled,
   Box,
   Typography,
   InputBase,
   Menu,
   MenuItem,
} from '@mui/material';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';

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
   const [open, setOpen] = useState(false);
   return (
      <AppBar position="sticky">
         <StyledToolbar>
            <Typography
               variant="h5"
               sx={{ display: { xs: 'none', sm: 'block' }, paddingTop: 0 }}
            >
               <img
                  src="/img/InfinityCreativityLogo.png"
                  alt="Infinite Creativity"
                  with="43rem"
                  height="43rem"
               />
            </Typography>
            <AllInclusiveIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
            <Search>
               <InputBase placeholder="search term" />
            </Search>
            <Icons>
               <PersonIcon onClick={(e) => setOpen(true)} />
            </Icons>
         </StyledToolbar>
         <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
               vertical: 'top',
               horizontal: 'right',
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'right',
            }}
         >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
         </Menu>
      </AppBar>
   );
};

export default Navbar;
