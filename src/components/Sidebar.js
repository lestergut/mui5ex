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
} from '@mui/material';
import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const LinkPages = ['Donor', 'Histotrac', 'Outport', 'GenericPRA', 'Other'];

const Sidebar = ({ drawerWidth }) => {
   let navigate = useNavigate();
   return (
      <Box
         flex={1}
         p={1}
         flexShrink={1}
         sx={{
            display: { xs: 'none', sm: 'block' },
            flexGrow: 1,
            // width: drawerWidth,
         }}
      >
         <Box position="fixed">
            <Drawer
               variant="permanent"
               sx={{
                  // width: drawerWidth,
                  lm: 0,
                  rm: drawerWidth,
                  borderColor: red,
                  [`& .MuiDrawer-paper`]: {
                     width: drawerWidth,
                     boxSizing: 'border-box',
                  },
               }}
            >
               <Toolbar />
               <Box sx={{ overflow: 'auto' }}>
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
            </Drawer>
         </Box>
      </Box>
   );
};

export default Sidebar;
