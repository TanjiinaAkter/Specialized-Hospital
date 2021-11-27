import { Box, Skeleton } from '@mui/material';
import { useContext } from 'react';
import Container from '../components/Container/Container';
import ServiceDetails from '../components/ServiceDetails/ServiceDetails';
import context from '../context/context';

function ServiceDetailsPage() {
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
          <ServiceDetails isShowAll />
        )}
      </Container>
    </Box>
  );
}
export default ServiceDetailsPage;
