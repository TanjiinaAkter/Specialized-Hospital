import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import context from '../../context/context';

export default function serviceDetails() {
  const { id } = useParams();
  const [service, setService] = useState();
  const {
    state: { services },
  } = useContext(context);

  useEffect(() => {
    if (services.length !== 0) {
      console.log('Called me');
      const findedservice = services.find((cours) => String(cours.id) === String(id));
      setService(findedservice);
    }
  }, [services]);

  return (
    <Box py="2rem">
      <Paper>
        <Box p="1rem">
          <Grid container spacing={5}>
            <Grid item sm={4}>
              <Box
                component="img"
                width="100%"
                minHeight="100%"
                height="auto"
                src={service?.imageLink}
                alt={service?.name || 'N/A'}
              />
            </Grid>
            <Grid item sm={8}>
              <Box px="2rem">
                <Typography gutterBottom variant="h5" component="div">
                  {service?.name || 'N/A'}
                </Typography>
                <Divider />
                <Typography variant="subtitle1" color="text.secondary">
                  {service?.description}
                </Typography>

                <Box
                  py="1rem"
                  display="flex"
                  justifyContent="space-between"
                  width="100%"
                  alignItems="center"
                >
                  <Button variant="outlined" color="secondary" size="large">
                    Get This Service
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}
