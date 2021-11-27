import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import ListItem from '../Common/ListItem';
import SocialLinks from './Social';

export default function MediaCard({ id, title, desc, img, fees, contact, email, experience }) {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/doctors/${id}`);
  };
  return (
    <Card style={{ height: '100%' }}>
      <Box
        width="203px"
        border="5px solid var(--neutral)"
        borderRadius="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="203px"
        m="auto"
        p="0.25rem"
      >
        <Box width="200px" height="200px" borderRadius="50%" overflow="hidden">
          <Box component="img" src={img} width="100%" height="100%" />
        </Box>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title.length > 40 ? `${title.slice(0, 40)}...` : title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc.length > 80 ? `${desc.slice(0, 80)}...` : desc}
        </Typography>
        <ListItem name="Fees" desc={fees} />
        <ListItem name="Email" desc={email} />
        <ListItem name="Contact" desc={contact} />
        <ListItem name="Experience" desc={experience} />
      </CardContent>
      <CardActions>
        <Box display="flex" justifyContent="space-between" width="100%" alignItems="center">
          <Button variant="outlined" color="secondary" onClick={handleClick}>
            Contact
          </Button>
          <SocialLinks />
        </Box>
      </CardActions>
    </Card>
  );
}
