import {Box, Grid, Stack, Typography} from "@mui/material";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function AppHome() {

  return (
    <>
      <Navbar/>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Stack sx={{px: 2}}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Image src={"/homecat.png"} alt={"cat"} width={400} height={400}/>
            </Grid>
            <Grid item xs={12} md={6} sx={{mt: 3}}>
              <Typography variant="h3" sx={{mt: 15}}>
                Witaj w panelu odNowy.
              </Typography>
              <Typography variant="body2" sx={{mt: 2}}>
                Swoje postanowienie trzymasz nieprzerwanie przez 1 dzień.
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
}