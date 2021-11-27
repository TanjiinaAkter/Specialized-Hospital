import { Box } from '@mui/material';
import Container from '../components/Container/Container';
import Doctors from '../components/Doctors/Doctors';

function DoctorsPage() {
  return (
    <Box pt="5rem">
      <Container>
        <Doctors isShowAll />
      </Container>
    </Box>
  );
}
export default DoctorsPage;
