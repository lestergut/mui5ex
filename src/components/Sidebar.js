import React, { useState, useEffect } from 'react';
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
   Icon,
} from '@mui/material';

import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Feed from './Feed';

const LinkPages = [
   { id: 0, title: 'Donor', icon: 'medical_information' },
   { id: 1, title: 'Histotrac', icon: 'science' },
   { id: 2, title: 'Outport', icon: 'biotech' },
   { id: 3, title: 'GenericPRA', icon: 'groups' },
   { id: 4, title: 'Other', icon: 'workspaces' },
];

const Sidebar = ({ drawerWidth, handleCategory }) => {
   // let navigate = useNavigate();

   const setCategory = (category) => {
      handleCategory(category);
   };

   /* useEffect((term) => {
      console.log(`term from sidebar ${term}`);
      <Feed category={term} />;
   }); */

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
               {LinkPages.map((page) => (
                  <ListItem key={page.id} disablePadding>
                     <ListItemButton onClick={() => setCategory(page.id)}>
                        <Icon>{page.icon}</Icon>
                        <ListItemText primary={page.title} />
                     </ListItemButton>
                  </ListItem>
               ))}
            </List>
         </Box>
      </Box>
   );
};

export default Sidebar;
