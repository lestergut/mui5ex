import { useState } from 'react';
import { Box } from '@mui/material';
// import Data from '../data/Data';
import KnowledgeUnit from './KnowledgeUnit';

const Feed = ({ category }) => {
   // const [expanded, setExpanded] = useState(false);
   //console.log(`category from Feed ${category}`);
   return (
      <Box bgcolor="lightgrey">
         {console.log('category from Feed', category)}
         <KnowledgeUnit category={category} />
      </Box>
   );
};

export default Feed;
