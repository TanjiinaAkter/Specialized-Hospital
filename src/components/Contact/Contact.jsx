import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import Title from '../Common/Title';

const Contact = () => (
  <>
    <Title fTitle="Contact" lTitle="US" />
    <Box py="3rem">
      <Grid container spacing={5}>
        <Grid item md={5}>
          <Box component="img" src="/thumbnails/contact.jpg" width="100%" height="auto" />
        </Grid>
        <Grid item md={7}>
          <Paper elevation={3}>
            <Box p="1rem">
              <Box display="flex">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                />
                <Box width="1rem" />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                />
              </Box>
              <TextField
                id="outlined-basic"
                label="Subject"
                variant="outlined"
                fullWidth
                margin="dense"
              />
              <TextField
                id="outlined-basic"
                label="Message"
                multiline
                rows={6}
                variant="outlined"
                margin="dense"
                fullWidth
              />
              <Box pt="1rem" maxWidth="300px">
                <Button variant="outlined" startIcon={<SendIcon />} color="secondary" fullWidth>
                  Send US
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </>
);

export default Contact;
