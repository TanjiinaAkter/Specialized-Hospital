import { Box, Grid, Skeleton } from '@mui/material';
import { useContext } from 'react';
import context from '../../context/context';
import Title from '../Common/Title';
import Card from '../Doctor/Doctor';

function Doctors({ isShowAll }) {
  const {
    state: { doctors, isDoctorsLoading },
  } = useContext(context);
  const skeleton = (
    <Grid item xs={12} sm={6} md={4}>
      <Skeleton variant="text" width="100%" height="450px" />
    </Grid>
  );
  return (
    <Box py="1rem">
      <Title fTitle="Our" lTitle="Specialized" subTitle="Find a doctor" />
      <Box py="2rem">
        <Grid container spacing={3}>
          {isDoctorsLoading ? (
            <>
              {skeleton}
              {skeleton}
              {skeleton}
              {skeleton}
            </>
          ) : (
            doctors.slice(0, isShowAll ? doctors.length : 6).map((doctor) => (
              <Grid item xs={12} sm={6} md={4} key={doctor.id}>
                <Card {...doctor} isShowAll />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Box>
  );
}
export default Doctors;
