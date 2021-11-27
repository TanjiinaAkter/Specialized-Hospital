import { Box } from '@mui/material';
import Title from '../components/Common/Title';
import Container from '../components/Container/Container';
import Doctors from '../components/Doctors/Doctors';
import FQAS from '../components/FQAS/FQAS';
import Services from '../components/Services/Services';
import Slider from '../components/Slider/Slider';

function HomePage() {
  return (
    <>
      <Slider />
      <Box py="1rem">
        <Container>
          <Doctors />
          <Box py="2rem">
            <Title
              fTitle="Our"
              lTitle="Services"
              subTitle="We have provided the best services for you!"
            />
            <Box height="1rem" />
            <Services />
          </Box>

          <Box py="2rem">
            <Title fTitle="Frequently" lTitle="Asked Questions" />
            <Box height="1rem" />
            <FQAS />
          </Box>
        </Container>
      </Box>
    </>
  );
}
export default HomePage;
