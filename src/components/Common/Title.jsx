import { Box, Typography } from '@mui/material';

function Title({ fTitle, lTitle, subTitle }) {
  return (
    <Box textAlign="center">
      <Box display="flex" justifyContent="center">
        <Typography variant="h3" color="var(--secondary)">
          {fTitle}
        </Typography>
        <Box width="0.5rem" />
        <Typography variant="h3" color="var(--primary)">
          {lTitle}
        </Typography>
      </Box>
      {subTitle && (
        <Typography variant="subtitle1" color="var(--neutral)">
          {subTitle}
        </Typography>
      )}
    </Box>
  );
}
export default Title;
