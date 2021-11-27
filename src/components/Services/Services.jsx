import { Box, Grid, Skeleton } from '@mui/material';
import { useContext } from 'react';
import context from '../../context/context';
import Item from './Item';

export default function Services() {
  const {
    state: { isServiceLoading, services },
  } = useContext(context);
  const skeleton = (
    <Grid item xs={12} sm={6} md={4}>
      <Skeleton variant="rect" width="100%" height="200px" />
    </Grid>
  );
  return (
    <Box pb="1rem">
      <Box pt="2rem" pb="3rem">
        <Grid container spacing={4}>
          {isServiceLoading ? (
            <>
              {skeleton}
              {skeleton}
              {skeleton}
              {skeleton}
            </>
          ) : (
            services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <Item {...service} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Box>
  );
}
