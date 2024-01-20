import {Box, Button, Card, CardContent, Grid, Stack, Typography} from "@mui/material";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function FeelingJournal() {
  return (
    <>
      <Navbar/>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundImage: 'url(/gradient-bg.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Stack sx={{mt: 4, px: 5}} textAlign="left">
          <Stack direction="row">
            <Box flexGrow={1}>
              <Typography variant="h4">
                SOS! Potrzebuję nagłej pomocy.
              </Typography>
            </Box>
          </Stack>

          <Grid container justifyContent="center" alignItems="center" sx={{mt: 4}}>
            <Grid item xs={12} md={3} justifyContent="center" alignItems="center" textAlign="center">
              <Image src={"/soscat.png"} alt={"cat"} width={300} height={300}/>
            </Grid>
            <Grid item xs={12} md={8}>
              <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                <Button variant="contained">Połączenie ze specjalistą</Button>
                <Button variant="contained">Czat ze specjalistą</Button>
              </Stack>
              <Card sx={{mt: 2}}>
                <CardContent>
                  <Typography variant="h5">
                    Najważniejszy jest oddech. Nie jesteś tutaj sam!
                  </Typography>
                  <Typography variant="body2" sx={{mt: 1}}>
                    Po pierwsze, weź 3 głębokie oddechy. Poczuj powietrze w swoich płucach. Skup się na oddychaniu.
                  </Typography>
                  <Typography variant="body2" sx={{mt: 1}}>
                    Po drugie, skontaktuj się z naszym specjalistą pod numerem +48 123-123-123.
                  </Typography>
                  <Typography variant="body2" sx={{mt: 1}}>
                    Pamiętaj, że jeżeli jesteś w sytuacji zagrażającej życiu, pilnie skontaktuj się ze służbami
                    medycznymi pod numerem 112.
                    <br/>
                    Podaj niezbędne informacje: imię i nazwisko, miejsce gdzie teraz przebywasz oraz opisz dokładnie co
                    się dzieje.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
}