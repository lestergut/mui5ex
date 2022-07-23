import { useState } from 'react';
import { Box } from '@mui/material';
import Data from '../data/Data';
import KnowledgeUnit from './KnowledgeUnit';

const Feed = ({ unit }) => {
   const [expanded, setExpanded] = useState(false);

   return (
      <Box bgcolor="lightgrey">
         <KnowledgeUnit unit={unit} />
      </Box>
   );
};

export default Feed;
