import { ThemeContext } from '@emotion/react';
import {
   Box,
   CssBaseline,
   Toolbar,
   Drawer,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   ImageListTile,
   ListSubheader,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const LinkPages = ['Donor', 'Histotrac', 'Outport', 'GenericPRA', 'Other'];

const Sidebar = ({ drawerWidth }) => {
   let navigate = useNavigate();
   return (
      <Box
         sx={{
            display: { xs: 'none', sm: 'block' },
         }}
      >
         <Box
            position="fixed"
            sx={{
               width: '100%',
               maxWidth: drawerWidth,
            }}
            PaperProps={{ sx: { backgroundColor: 'orage' } }}
         >
            <List>
               {LinkPages.map((Page) => (
                  <ListItem key={uuidv4()} disablePadding>
                     <ListItemButton
                        onClick={() => navigate(`/${Page.toLowerCase()}`)}
                     >
                        <ListItemText primary={Page} />
                     </ListItemButton>
                  </ListItem>
               ))}
            </List>
         </Box>
      </Box>
   );
};

export default Sidebar;
