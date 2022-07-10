import { useState } from 'react';
import { Box } from '@mui/material';
import Data from '../data/Data';
import KwnoledgeUnit from './KwnoledgeUnit';

const Feed = ({ children }) => {
   const [expanded, setExpanded] = useState(false);

   return (
      <Box bgcolor="lightgrey" flex={4} p={1}>
         {children}
      </Box>
   );
};

export default Feed;
