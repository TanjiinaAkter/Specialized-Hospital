import { Box, Button, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

export default function Item({ id, name, description, imageLink }) {
  const history = useHistory();

  const handleToggle = () => {
    history.push(`/services/${id}`);
  };

  return (
    <Box p="0.75rem" textAlign="center">
      <Box display="flex" justifyContent="center">
        <Box borderRadius="50%" overflow="hidden" width="130px" height="130px">
          <Box component="img" width="100%" height="100%" src={imageLink} alt={name} />
        </Box>
      </Box>
      <Typography variant="h6" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description.length > 180 ? description.slice(0, 180) : description}
      </Typography>
      <Box pt="1rem">
        <Button variant="outlined" color="secondary" size="small" onClick={handleToggle}>
          See More
        </Button>
      </Box>
    </Box>
  );
}
