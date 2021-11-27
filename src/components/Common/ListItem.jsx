import { Box, Divider, Typography } from '@mui/material';

const ListItem = ({ name, desc }) => (
  <>
    <Box py="0.5rem" display="flex" justifyContent="space-between">
      <Typography variant="subtitle1" color="var(--primary)">
        {name}
      </Typography>
      <Typography variant="subtitle1" color="var(--neutral)">
        {desc}
      </Typography>
    </Box>
    <Divider />
  </>
);

export default ListItem;
