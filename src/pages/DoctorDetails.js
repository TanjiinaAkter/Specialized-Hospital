import { Box, Skeleton } from '@mui/material';
import { useContext } from 'react';
import Container from '../components/Container/Container';
import DoctorDetails from '../components/DoctorDetails/DoctorDetails';
import context from '../context/context';

function DoctorDetailsPage() {
  const {
    state: { isLoading },
  } = useContext(context);
  return (
    <Box pt="5rem">
      <Container>
        {isLoading ? (
          <Box py="2rem">
            <Skeleton variant="rect" width="100%" height="400px" />
          </Box>
        ) : (
          <DoctorDetails isShowAll />
        )}
      </Container>
    </Box>
  );
}
export default DoctorDetailsPage;
