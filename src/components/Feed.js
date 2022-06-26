import { useState } from 'react';
import {
   Box,
   Card,
   CardHeader,
   CardMedia,
   CardContent,
   CardActions,
   IconButton,
   Typography,
   Collapse,
   styled,
} from '@mui/material';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import Cards from '../data/Cards';

const ExpandMore = styled((props) => {
   const { expand, ...other } = props;
   return <IconButton {...other} />;
})(({ theme, expand }) => ({
   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
   marginLeft: 'auto',
   transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
   }),
}));

const Feed = () => {
   const [expanded, setExpanded] = useState(false);

   const handleExpandClick = () => {
      setExpanded(!expanded);
   };

   return (
      <Box bgcolor="lightgrey" flex={4} p={2}>
         {Cards.map((card) => {
            return (
               <Card key={card.id} sx={{ maxWidth: 345 }}>
                  <CardHeader title={card.title} subheader={card.subtitle} />
                  <CardMedia
                     component="img"
                     height="194"
                     image={card.image}
                     alt={card.alt}
                  />
                  <CardContent>
                     <Typography variant="body2" color="text.secondary">
                        {card.resumee}
                     </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                     <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                     >
                        <ExpandMoreIcon />
                     </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                     <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>{card.content}</Typography>
                     </CardContent>
                  </Collapse>
               </Card>
            );
         })}
         ;
      </Box>
   );
};

export default Feed;
