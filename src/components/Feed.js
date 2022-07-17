import { useState } from 'react';
import { Box } from '@mui/material';
import Data from '../data/Data';
import KwnoledgeUnit from './KwnoledgeUnit';

const Feed = ({ children, drawerWidth }) => {
   const [expanded, setExpanded] = useState(false);

   return <Box bgcolor="lightgrey">{children}</Box>;
};

export default Feed;
