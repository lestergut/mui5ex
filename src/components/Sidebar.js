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
import InboxIcon from '@mui/icons-material/Inbox';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const LinkPages = ['Donor', 'Histotrac', 'Outport', 'GenericPRA', 'Other'];
const drawerWidth = 150;

const Sidebar = () => {
   let navigate = useNavigate();
   return (
      <Box
         flex={1}
         p={1}
         sx={{
            display: { xs: 'none', sm: 'block' },
         }}
      >
         <CssBaseline />
         <Box position="fixed" bgcolor="primary">
            <Drawer
               variant="permanent"
               sx={{
                  width: drawerWidth,
                  flexShrink: 2,
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

            {/*  <List>
               {LinkPages.map((Page) => (
                  <ListItem disablePadding key={uuidv4()}>
                     <Link
                        to={`/${Page.toLowerCase()}`}
                        component={Page}
                        style={{
                           textDecoration: 'none',
                           color: 'black',
                        }}
                     >
                        <ListItemButton>
                           <ListItemText primary={Page} />
                        </ListItemButton>
                     </Link>
                  </ListItem>
               ))}
            </List> */}
         </Box>
      </Box>
   );
};

export default Sidebar;
