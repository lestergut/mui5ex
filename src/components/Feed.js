import { useState } from 'react';
import { Box } from '@mui/material';
import Data from '../data/Data';
import KwnoledgeUnit from './KwnoledgeUnit';

const Feed = ({ children, drawerWidth }) => {
   const [expanded, setExpanded] = useState(false);

   const feedStart = drawerWidth + 2;

   return (
      <Box
         bgcolor="lightgrey"
         flex={4}
         p={1}
         sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            // ml: `calc(${drawerWidth}px)`,
            flexGrow: 3,
         }}
      >
         {children}
      </Box>
   );
};

export default Feed;
