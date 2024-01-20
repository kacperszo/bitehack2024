import {Button, Container, Stack, Typography} from "@mui/material";
import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(gradient-bg.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Typography variant="h2" align="center">
        odNowa
      </Typography>
      <Typography variant="h6" align="center">
        Zacznij swoje życie od nowa, bez uzależnień.
      </Typography>

      <Stack direction="row" spacing={2} sx={{mt: 2}}>
        <Button variant="contained" size="small" onClick={() => router.push('/auth/sign-in')}>
          Zaloguj się
        </Button>
        <Button variant="contained" size="small" onClick={() => router.push('/auth/sign-up')}>
          Zarejestruj się
        </Button>
      </Stack>
    </Container>
  );
}
