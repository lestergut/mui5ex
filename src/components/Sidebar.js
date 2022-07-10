import {
   Box,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const LinkPages = ['Donor', 'Histotrac', 'Outport', 'GenericPRA', 'Other'];

const Sidebar = () => {
   return (
      <Box
         flex={1}
         p={2}
         sx={{
            display: { xs: 'none', sm: 'block' },
         }}
      >
         <Box
            position="fixed"
            style={{
               backgroundColor: 'lightyellow',
            }}
         >
            <List>
               {LinkPages.map((Page) => (
                  <ListItem disablePadding key={uuidv4()}>
                     {/* <ListItemButton component="a" href="#home"> */}
                     <Link
                        to={`/${Page.toLowerCase()}`}
                        component={Page}
                        style={{
                           textDecoration: 'none',
                           color: 'black',
                        }}
                     >
                        <ListItemButton>
                           {/* <ListItemIcon>
                              <InboxIcon />
                           </ListItemIcon> */}
                           <ListItemText primary={Page} />
                        </ListItemButton>
                     </Link>
                  </ListItem>
               ))}
            </List>
         </Box>
      </Box>
   );
};

export default Sidebar;
