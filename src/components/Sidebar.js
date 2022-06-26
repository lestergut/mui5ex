import {
   Box,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';

const Sidebar = () => {
   return (
      <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
         <Box position="fixed">
            <List>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#home">
                     <ListItemIcon>
                        <InboxIcon />
                     </ListItemIcon>
                     <ListItemText primary="CD" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton>
                     <ListItemIcon>
                        <InboxIcon />
                     </ListItemIcon>
                     <ListItemText primary="Histotrac" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#home">
                     <ListItemIcon>
                        <InboxIcon />
                     </ListItemIcon>
                     <ListItemText primary="Outport" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#home">
                     <ListItemIcon>
                        <InboxIcon />
                     </ListItemIcon>
                     <ListItemText primary="PRA" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#home">
                     <ListItemIcon>
                        <InboxIcon />
                     </ListItemIcon>
                     <ListItemText primary="Others" />
                  </ListItemButton>
               </ListItem>
            </List>
         </Box>
      </Box>
   );
};

export default Sidebar;
