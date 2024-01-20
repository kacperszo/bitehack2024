import {Box, Button, Card, CardContent, Grid, Stack, Typography, useTheme} from "@mui/material";
import Navbar from "@/components/navbar";
import Image from "next/image";
import {useEffect} from "react";

const InfoCard = ({children}) => {
    const theme = useTheme();

    return (
        <Box sx={{
            backgroundColor: "#EFFDF3",
            padding: 1.5,
            margin: 3,
            borderRadius: 2,
        }}>
            {children}
        </Box>
    )
}
export default function Sos() {
    const theme = useTheme();
    useEffect(() => {
        if (document?.body) {
            document.body.style.backgroundColor = theme.palette.primary.light;
        }
    }, [theme]);
    return (
        <>
            <Navbar/>
            <Stack direction={"column"}>
                <InfoCard>
                    <Box>
                        <Typography fontWeight={600} variant={"h6"}><
                            Image
                            style={{paddingLeft: 10, paddingRight: 10,}}
                            src={"/icons/Warning.svg"} width={30} height={30}
                            alt={""}/>
                            SOS! Potrzebuję nagłej pomocy
                        </Typography>
                    </Box>
                </InfoCard>
                <InfoCard>
                    <Box sx={{px: 2}}>

                        <Typography fontWeight={600} sx={{py: 3}} variant={"h6"} textAlign={"center"}>Telefon na numer
                            alarmowy</Typography>
                        <Typography>
                            Jeżeli czujesz się bardzo źle lub jesteś w sytuacji zagrażającej życiu, nie czekaj
                            skorzystaj z
                            numeru alarmowego.
                            Oto niezbędne informacje które musisz podać:
                            <ul>
                                <li>Imię i nazwisko</li>
                                <li>Miejsce w którym przebywasz</li>
                                <li>Opisz co dokładnie się dzieje</li>
                            </ul>
                        </Typography>
                        <Box sx={{
                            textAlign: "center",
                            py: 3
                        }}>
                            <Image src={"/undraw_night_calls.png"} width={150} height={150} alt={""}/><br/>
                            <Button sx={{mt: 3, borderRadius: "10px", px: 3, py: 1}}
                                    variant={"contained"}>Zadzwoń</Button>
                        </Box>
                    </Box>
                </InfoCard>                <InfoCard>
                    <Box sx={{px: 2}}>

                        <Typography fontWeight={600} sx={{py: 3}} variant={"h6"} textAlign={"center"}>Telefon na numer
                            alarmowy</Typography>
                        <Typography>
                            Jeżeli czujesz się bardzo źle lub jesteś w sytuacji zagrażającej życiu, nie czekaj
                            skorzystaj z
                            numeru alarmowego.
                            Oto niezbędne informacje które musisz podać:
                            <ul>
                                <li>Imię i nazwisko</li>
                                <li>Miejsce w którym przebywasz</li>
                                <li>Opisz co dokładnie się dzieje</li>
                            </ul>
                        </Typography>
                        <Box sx={{
                            textAlign: "center",
                            py: 3
                        }}>
                            <Image src={"/undraw_night_calls.png"} width={150} height={150} alt={""}/><br/>
                            <Button sx={{mt: 3, borderRadius: "10px", px: 3, py: 1}}
                                    variant={"contained"}>Zadzwoń</Button>
                        </Box>
                    </Box>
                </InfoCard> <InfoCard>
                <Box sx={{px: 2}}>

                    <Typography fontWeight={600} sx={{py: 3}} variant={"h6"} textAlign={"center"}>Telefon na numer
                        alarmowy</Typography>
                    <Typography>
                        Jeżeli czujesz się bardzo źle lub jesteś w sytuacji zagrażającej życiu, nie czekaj
                        skorzystaj z
                        numeru alarmowego.
                        Oto niezbędne informacje które musisz podać:
                        <ul>
                            <li>Imię i nazwisko</li>
                            <li>Miejsce w którym przebywasz</li>
                            <li>Opisz co dokładnie się dzieje</li>
                        </ul>
                    </Typography>
                    <Box sx={{
                        textAlign: "center",
                        py: 3
                    }}>
                        <Image src={"/undraw_night_calls.png"} width={150} height={150} alt={""}/><br/>
                        <Button sx={{mt: 3, borderRadius: "10px", px: 3, py: 1}}
                                variant={"contained"}>Zadzwoń</Button>
                    </Box>
                </Box>
            </InfoCard>

            </Stack>
        </>
    )
        ;
}