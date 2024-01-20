import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import Navbar from "@/components/navbar";
import Image from "next/image";
import CallEndIcon from '@mui/icons-material/CallEnd';
import MicIcon from '@mui/icons-material/Mic';
import VideocamIcon from '@mui/icons-material/Videocam';
import SettingsIcon from '@mui/icons-material/Settings';
import {useState} from "react";
import {DateTimePicker} from "@mui/x-date-pickers";
import Layout from "@/components/layout";

export default function Consultation() {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  return (
    <Layout>
      <Navbar/>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
          <DialogTitle>Umów konsultację ze specjalistą</DialogTitle>
          <DialogContent>
            <Stack sx={{mt: 2}} spacing={2}>
              <Alert severity="info">Wybierz dostępny termin z kalendarza poniżej. Po wysłaniu formularza, otrzymasz
                powiadomienie czy wizyta została prawidłowo zarejestrowana.</Alert>
              <DateTimePicker
                label="Wybierz termin konsultacji"
              />
              <TextField
                label="Opisz powód konsultacji"
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>Zamknij</Button>
            <Button variant="contained" onClick={handleClose}>Zamów</Button>
          </DialogActions>
        </Dialog>
        <Stack sx={{mt: 4, px: 5}} textAlign="left">
          <Stack direction="row">
            <Box flexGrow={1}>
              <Typography variant="h4">
                Konsultacja ze specjalistą
              </Typography>
            </Box>
          </Stack>

          <Grid container justifyContent="center" sx={{mt: 4, pb: 5}} spacing={2}>
            <Grid item xs={12} md={4}>
              <Card sx={{position: 'relative'}}>
                <CardContent>
                  <Typography variant="h5">Informacje</Typography>
                  <Typography variant="body2">Jeżeli posiadasz już zamówioną konsultację na aktualną godzinę, pojawi się
                    ona automatycznie po prawej stronie. Jeżeli jesteś przed czasem, możesz zostać na tej stronie. Nasz
                    specjalista dołączy do Ciebie a rozmowa uruchomi się automatycznie.</Typography>
                  <Typography variant="body2" sx={{mt: 1.5}}>Możesz zamówić następną konsultację już teraz przez nasz
                    formularz.</Typography>
                  <Button variant="contained" size="small" sx={{mt: 2}} onClick={() => setOpen(true)}>Umów
                    konsultację</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={8}>
              <Card sx={{position: 'relative'}}>
                <CardContent>
                  <Image src="/videocall.png" alt="Wideorozmowa" width={875} height={600}/>

                  <Box sx={{
                    position: 'absolute',
                    bottom: 100,
                    left: 30,
                    width: 120,
                    height: 90,
                    bgcolor: 'background.paper',
                    borderRadius: 1
                  }}>
                    <Image src="/your-camera-feed.jpg" alt="Kamerka" layout="fill" objectFit="cover"/>
                  </Box>

                  <Stack direction="row" spacing={2} justifyContent="center" sx={{mt: 2}}>
                    <IconButton color="error" aria-label="Zakończ rozmowę">
                      <CallEndIcon/>
                    </IconButton>
                    <IconButton aria-label="Wycisz/Odcisz mikrofon">
                      <MicIcon/>
                    </IconButton>
                    <IconButton aria-label="Wyłącz/Włącz kamerę">
                      <VideocamIcon/>
                    </IconButton>
                    <IconButton aria-label="Ustawienia">
                      <SettingsIcon/>
                    </IconButton>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Layout>
  );
}
