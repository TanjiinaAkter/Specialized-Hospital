import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import fqsDatas from './FQA.json';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {fqsDatas.map(({ title, desc, id }) => (
        <Accordion
          key={id}
          expanded={expanded === `panel${id}`}
          onChange={handleChange(`panel${id}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${id}bh-content`}
            id={`panel${id}bh-header`}
          >
            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{desc}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
