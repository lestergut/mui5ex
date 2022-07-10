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

const KwnoledgeUnit = ({ information }) => {
   const { title, subtitle, image, alt, resumee, content } = information;
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

export default KwnoledgeUnit;
