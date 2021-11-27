import { Box } from '@mui/material';
import Title from '../components/Common/Title';
import Container from '../components/Container/Container';
import Services from '../components/Services/Services';

function ServicesPage() {
  return (
    <Box pt="5rem">
      <Title fTitle="Our" lTitle="Services" />
      <Box py="1rem">
        <Container>
          <Services isShowAll />
        </Container>
      </Box>
    </Box>
  );
}
export default ServicesPage;
