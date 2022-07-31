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

const Unit = ({ unit }) => {
   return (
      <Card>
         <CardHeader title={unit.title} subheader={unit.subtitle} />
         <CardMedia
            component="img"
            height="194"
            image={unit.image}
            alt={unit.alt}
         />
         {console.log(`inside array mapping ${unit.id}: ${unit.title}`)}
         <CardContent>
            <Typography variant="body2" color="text.secondary">
               {unit.resumee}
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
               <Typography>{unit.content}</Typography>
            </AccordionDetails>
         </Accordion>
         <Divider light />
      </Card>
   );
};

export default Unit;
