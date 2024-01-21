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
  Typography, useMediaQuery, useTheme
} from "@mui/material";
import Navbar from "@/components/navbar";
import Image from "next/image";
import CallEndIcon from '@mui/icons-material/CallEnd';
import MicIcon from '@mui/icons-material/Mic';
import VideocamIcon from '@mui/icons-material/Videocam';
import SettingsIcon from '@mui/icons-material/Settings';
import React, {useState} from "react";
import {DateTimePicker} from "@mui/x-date-pickers";
import Layout from "@/components/layout";

export default function Consultation() {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"), {
    noSsr: false
  });

  const InfoCard = ({children, sx}) => {
    const theme = useTheme();

    return (<Box sx={{
      backgroundColor: "#EFFDF3", padding: 1.5, m: 3, borderRadius: 2, ...sx
    }}>
      {children}
    </Box>)
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
          <DialogTitle sx={{backgroundColor: "#EFFDF3"}}>Umów konsultację ze specjalistą</DialogTitle>
          <DialogContent sx={{backgroundColor: "#EFFDF3"}}>
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
          <DialogActions sx={{backgroundColor: "#EFFDF3",}}>
            <Button variant="outlined" onClick={handleClose}>Zamknij</Button>
            <Button variant="contained" onClick={handleClose}>Zamów</Button>
          </DialogActions>
        </Dialog>
        <Stack sx={{mt: 4, px: 5}} textAlign="left">
          <InfoCard>
          <Box>
            <Typography fontWeight={600} variant={"h4"}><
                Image
                style={{paddingLeft: 10, paddingRight: 10,}}
                src={"/icons/Camera.svg"} width={30} height={30}
                alt={""}/>
              Konsultacja ze specjalistą
            </Typography>
          </Box>
        </InfoCard>

          <Grid container justifyContent="center" sx={{mt: 4, pb: 5}} spacing={2}>
            <Grid item xs={12}>
              <InfoCard sx={!isMobile?({backgroundColor:theme.palette.primary.light}):null}>
                <Box sx={{px: 2}}>
                  <Typography fontWeight={600} sx={{py: 3}} variant={"h6"} textAlign={"center"}>Informacje</Typography>
                  <Typography>
                    Jeżeli posiadasz już zamówioną konsultację na aktualną godzinę, pojawi się ona automatycznie po prawej stronie. Jeżeli jesteś przed czasem, możesz zostać na tej stronie. Nasz
                    specjalista dołączy do Ciebie a rozmowa uruchomi się automatycznie.
                  </Typography>
                  <Box sx={{
                    textAlign: "center", py: 3
                  }}>
                    <Button sx={{mt: 3, borderRadius: "10px", px: 3, py: 1}} onClick={() => setOpen(true)} variant={"contained"}>Umów konsultację</Button>
                  </Box>
                </Box>
              </InfoCard>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{position: 'relative'}}>
                <CardContent sx={{backgroundColor: "#EFFDF3",}}>

                  <Image style={{marginLeft:"auto", marginRight:"auto", display:"block"}} src="/videocall.png" alt="Wideorozmowa" width={875} height={600}/>

                  <Box sx={{
                    position: 'absolute',
                    bottom: 100,
                    left: 30,
                    width: 120,
                    display:"flex",
                    alignContent:"center",
                    justifyItems:"center",
                    height: 90,
                    backgroundColor: 'background.paper',
                    borderRadius: 1
                  }}>
                    <Box sx={{
                        display:"flex",
                        alignContent:"center",
                        justifyItems:"center",
                    }}>
                    </Box>
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
