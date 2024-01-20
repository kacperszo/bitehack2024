import {Box, Button, Stack, Typography, useTheme} from "@mui/material";
import {useRouter} from "next/router";
import Image from "next/image";

export default function Home() {
    const router = useRouter();
    const theme = useTheme()
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.palette.primary.light,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                maxWidth: '100%',
            }}
        >
            <Image sx={{marginBottom: 20}} src={"/logo.png"} alt={"logo"} width={250} height={250}/>
            <Typography variant="h3" fontWeight={"600"} color={theme.palette.primary.dark} align="center">
                odNowa
            </Typography>
            <Typography variant="h6" fontWeight={"400"} color={theme.palette.primary.dark} align="center">
                Zacznij swoje życie od nowa,<br/> bez uzależnień.
            </Typography>

            <Stack direction="column" spacing={2} sx={{mt: 6}}>
                <Button variant="outlined"
                        sx={{padding: 1, color: theme.palette.primary.dark, borderColor: theme.palette.primary.dark}}
                        onClick={() => router.push('/auth/sign-in')}>
                    Zaloguj się
                </Button>
                <Button variant="contained" sx={{
                    borderRadius: 2,
                    padding: 2,
                    paddingTop: 1.5,
                    paddingBottom: 1.5,
                    backgroundColor: theme.palette.primary.dark
                }} onClick={() => router.push('/auth/sign-up')}>
                    Zarejestruj się
                </Button>
            </Stack>
        </Box>
    );
}
