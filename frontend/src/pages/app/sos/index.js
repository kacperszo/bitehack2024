import {Box, Button, Card, CardContent, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import Navbar from "@/components/navbar";
import Image from "next/image";
import {useEffect} from "react";
import Layout from "@/components/layout";

const InfoCard = ({children, sx}) => {
    const theme = useTheme();

    return (<Box sx={{
        backgroundColor: "#EFFDF3", padding: 1.5, m: 3, borderRadius: 2, ...sx
    }}>
        {children}
    </Box>)
}

function MobileSOSLayout() {
    return <Stack direction={"column"}>
        <InfoCard>
            <Box>
                <Typography fontWeight={600} variant={"h4"}><
                    Image
                    style={{paddingLeft: 10, paddingRight: 10,}}
                    src={"/icons/Warning.svg"} width={30} height={30}
                    alt={""}/>
                    SOS! Potrzebuję nagłej pomocy
                </Typography>
            </Box>
        </InfoCard>
        <Box>

            <InfoCard>
                <Box sx={{px: 2}}>

                    <Typography fontWeight={600} sx={{py: 3}} variant={"h6"} textAlign={"center"}>Telefon na
                        numer
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
                        textAlign: "center", py: 3
                    }}>
                        <Image src={"/undraw_night_calls.png"} width={150} height={150} alt={""}/><br/>
                        <Button sx={{mt: 3, borderRadius: "10px", px: 3, py: 1}}
                                variant={"contained"}>Zadzwoń</Button>
                    </Box>
                </Box>
            </InfoCard> <InfoCard>
            <Box sx={{px: 2}}>

                <Typography fontWeight={600} sx={{py: 3}} variant={"h6"} textAlign={"center"}>
                    Wideo rozmowa ze specjalistą
                </Typography>
                <Typography>
                    Pamiętaj że nie jesteś sam, skorzystaj z możliwość <strong>wizyty online w wirtualnym
                    gabinecie
                    specjalisty</strong>
                </Typography>
                <Box sx={{
                    textAlign: "center", py: 3
                }}>
                    <Image src={"/undraw_group_video.png"} width={170} height={150} alt={""}/><br/>
                    <Button sx={{mt: 3, borderRadius: "10px", px: 3, py: 1}}
                            variant={"contained"}>Połączenie ze specjalistą</Button>
                </Box>
            </Box>
        </InfoCard>
            <InfoCard>
                <Box sx={{px: 2}}>

                    <Typography fontWeight={600} sx={{py: 3}} variant={"h6"} textAlign={"center"}>Czat ze
                        specjalistą</Typography>
                    <Typography>
                        Jeśli nie jesteś gotowy na rozmowę z ekspertem, napisz do niego wiadomość
                    </Typography>
                    <Box sx={{
                        textAlign: "center", py: 3
                    }}>
                        <Image src={"/undraw_mobile_encryption.png"} width={150} height={150} alt={""}/><br/>
                        <Button sx={{mt: 3, borderRadius: "10px", px: 3, py: 1}}
                                variant={"contained"}>Napisz od specjalisty</Button>
                    </Box>
                </Box>
            </InfoCard>
            <InfoCard>
                <Box sx={{px: 2}}>

                    <Typography fontWeight={600} sx={{py: 3}} variant={"h6"} textAlign={"center"}>Zobacz naszą
                        bazę
                        wiedzy</Typography>
                    <Typography>
                        Jeśli <strong>czujesz się zdezorientowany i zestresowany</strong>, spróbuj się uspokoić.
                        Oddychaj powoli i głęboko, skupiając się na swoim oddechu. </Typography>
                    <Box sx={{
                        textAlign: "center", py: 3
                    }}>
                        <Image src={"/undraw_meditation.png"} width={160} height={150} alt={""}/><br/>
                        <Button sx={{mt: 3, borderRadius: "10px", px: 3, py: 1}}
                                variant={"contained"}>Przejdź do bazy</Button>
                    </Box>
                </Box>
            </InfoCard>
        </Box>
    </Stack>;
}

function DesktopSOSLayout() {
    const theme = useTheme();
    return <Stack direction={"column"}>
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
        <Grid container spacing={2}>
            <Grid item xs={6}>

                <InfoCard sx={{
                    backgroundColor: theme.palette.primary.light
                }}>
                    <Typography fontWeight={600} sx={{py: 3, pl: 2}} variant={"h6"} textAlign={"left"}>Telefon na numer
                        alarmowy
                    </Typography>
                    <Box sx={{px: 2, display: "flex"}}>
                        <Stack direction={"column"}>
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
                            <Button sx={{mt: 3, borderRadius: "10px", width: 160, px: 1, py: 1}}
                                    variant={"contained"}>Zadzwoń</Button>
                        </Stack>
                        <Box sx={{
                            textAlign: "center", py: 3
                        }}>

                            <Image src={"/undraw_night_calls.png"} width={160} height={150} alt={""}/><br/>

                        </Box>
                    </Box>
                </InfoCard>
            </Grid>
            <Grid item xs={6}>

                <InfoCard sx={{
                    backgroundColor: theme.palette.primary.light
                }}>
                    <Typography fontWeight={600} sx={{py: 3, pl: 2}} variant={"h6"} textAlign={"left"}>Wideo rozmowa ze
                        specjalistą
                    </Typography>
                    <Box sx={{px: 2, display: "flex"}}>
                        <Stack direction={"column"}>
                            <Typography>
                                Pamiętaj że nie jesteś sam, skorzystaj z możliwość <strong>wizyty online w wirtualnym
                                gabinecie
                                specjalisty</strong>
                            </Typography>
                            <Button sx={{mt: 3, width: 260, borderRadius: "10px", px: 1, py: 1}}
                                    variant={"contained"}>Połączenie ze specjalistą</Button>
                        </Stack>
                        <Box sx={{
                            textAlign: "center", py: 3
                        }}>

                            <Image src={"/undraw_group_video.png"} width={160} height={150} alt={""}/><br/>

                        </Box>
                    </Box>
                </InfoCard>
            </Grid><Grid item xs={6}>

            <InfoCard sx={{
                backgroundColor: theme.palette.primary.light
            }}>
                <Typography fontWeight={600} sx={{py: 3, pl: 2}} variant={"h6"} textAlign={"left"}>Czat ze specjalistą
                </Typography>
                <Box sx={{px: 2, display: "flex"}}>
                    <Stack direction={"column"}>
                        <Typography>
                            Jeśli nie jesteś gotowy na rozmowę z ekspertem, napisz do niego wiadomość
                        </Typography>
                        <Button sx={{mt: 3, borderRadius: "10px", width: 260, px: 3, py: 1}}
                                variant={"contained"}>Napisz od specjalisty</Button>
                    </Stack>
                    <Box sx={{
                        textAlign: "center", py: 3
                    }}>

                        <Image src={"/undraw_mobile_encryption.png"} width={160} height={150} alt={""}/><br/>

                    </Box>
                </Box>
            </InfoCard>
        </Grid><Grid item xs={6}>

            <InfoCard sx={{
                backgroundColor: theme.palette.primary.light
            }}>
                <Typography fontWeight={600} sx={{py: 3, pl: 2}} variant={"h6"} textAlign={"left"}>Zobacz naszą
                    bazę
                    wiedzy
                </Typography>
                <Box sx={{px: 2, display: "flex"}}>
                    <Stack direction={"column"}>
                        <Typography>
                            Jeśli <strong>czujesz się zdezorientowany i zestresowany</strong>, spróbuj się uspokoić.
                            Oddychaj powoli i głęboko, skupiając się na swoim oddechu. </Typography>
                        <Button sx={{mt: 3, borderRadius: "10px", width: 160, px: 1, py: 1}}
                                variant={"contained"}>Przejdź do bazy</Button>
                    </Stack>
                    <Box sx={{
                        textAlign: "center", py: 3
                    }}>

                        <Image src={"/undraw_meditation.png"} width={160} height={150} alt={""}/><br/>

                    </Box>
                </Box>
            </InfoCard>
        </Grid>
        </Grid>
    </Stack>;
}

export default function Sos() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"), {
        noSsr: false
    });
    useEffect(() => {
        if (document?.body) {
            document.body.style.backgroundColor = theme.palette.primary.light;
        }
    }, [theme]);
    return (<>
        <Layout>
            <Navbar/>
            {isMobile && <MobileSOSLayout/>}
            {!isMobile && <DesktopSOSLayout/>}
        </Layout>
    </>);
}
