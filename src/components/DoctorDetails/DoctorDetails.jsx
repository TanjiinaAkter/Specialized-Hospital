import { Box, Divider, Grid, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import context from '../../context/context';
import ListItem from '../Common/ListItem';
import Social from '../Doctor/Social';

export default function CourseDetails() {
  const { id } = useParams();
  const [doctor, setDoctors] = useState();
  const {
    state: { doctors },
  } = useContext(context);

  useEffect(() => {
    if (doctors.length !== 0) {
      const findedCourse = doctors.find((dctr) => String(dctr.id) === String(id));
      setDoctors(findedCourse);
    }
  }, []);

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
                height="300px"
                src={`${doctor?.img}`}
                alt={doctor?.title || 'N/A'}
              />
            </Grid>
            <Grid item sm={8}>
              <Box px="2rem">
                <Typography gutterBottom variant="h5" component="div">
                  {doctor?.title || 'N/A'}
                </Typography>
                <Divider />
                <Typography variant="subtitle1" color="text.secondary">
                  {doctor?.desc}
                </Typography>
                <ListItem name="Fees" desc={doctor?.fees || 'N/A'} />
                <ListItem name="Email" desc={doctor?.email || 'N/A'} />
                <ListItem name="Contact" desc={doctor?.contact || 'N/A'} />
                <ListItem name="Experience" desc={doctor?.experience || 'N/A'} />
                <Box
                  py="1rem"
                  display="flex"
                  justifyContent="space-between"
                  width="100%"
                  alignItems="center"
                >
                  <Button variant="outlined" color="secondary" size="large">
                    Contact Now
                  </Button>
                  <Social />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}
