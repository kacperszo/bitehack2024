import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {useRouter} from "next/router";
import {useState} from "react";
import Image from "next/image";

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    //login
    router.push('/app')
  }

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Image src={"/logo.png"} alt={"logo"} width={150} height={150}/>
      <Typography variant="h2" align="center">
        odNowa
      </Typography>
      <Typography variant="h6" align="center">
        Zacznij swoje życie od nowa, bez uzależnień.
      </Typography>

      <Typography variant="h5" align="center" sx={{mt: 2}}>
        Logowanie
      </Typography>

      <Stack spacing={2} sx={{mt: 2}}>
        <TextField
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          label="Adres e-mail"
          size="small"
          required
          type="email"
          sx={{
            width: '300px'
          }}
        />

        <TextField
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label="Hasło"
          size="small"
          required
          sx={{
            width: '300px'
          }}
        />

        <Button variant="contained" onClick={submit}>
          Zaloguj
        </Button>
      </Stack>
    </Box>
  );
}
