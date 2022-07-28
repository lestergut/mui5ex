import {
   Card,
   CardHeader,
   CardMedia,
   CardContent,
   Typography,
   Accordion,
   AccordionSummary,
   AccordionDetails,
   Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Data } from '../data/Data';

const KnowledgeUnit = ({ category }) => {
   console.log('category from knwoledgeunit', category);
   let units = Data.filter((item) => item.category === category);
   if (units.length === 0) {
      return <h1>Nothing in the Database</h1>;
   }
   const { title, subtitle, image, alt, resumee, content } = units;
   return (
      <Card>
         <CardHeader title={title} subheader={subtitle} />
         <CardMedia component="img" height="194" image={image} alt={alt} />
         <CardContent>
            <Typography variant="body2" color="text.secondary">
               {resumee}
            </Typography>
         </CardContent>
         <Accordion>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel-content"
               id="panel-content"
            >
               <Typography align="right">Show more ...</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>{content}</Typography>
            </AccordionDetails>
         </Accordion>
         <Divider light />
      </Card>
   );
};

export default KnowledgeUnit;
