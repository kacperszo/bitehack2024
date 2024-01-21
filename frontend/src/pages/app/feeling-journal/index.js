import {
    Box,
    Button,
    Card,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
    Typography, useMediaQuery, useTheme
} from "@mui/material";
import Navbar from "@/components/navbar";
import Image from "next/image"
import dayGridPlugin from '@fullcalendar/daygrid'
import FullCalendar from "@fullcalendar/react";
import plLocale from '@fullcalendar/core/locales/pl';

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import React, {useState} from "react";
import Layout from "@/components/layout";

export const matchWellbeingIcon = (type) => {
    const iconStyle = {
        fontSize: '50'
    };

    switch (type) {
        case 'very bad':
            return <Image width={40} height={40} src={"/face1.png"}/>;
        case 'bad':
            return <Image width={40} height={40} src={"/face2.png"}/>;
        case 'neutral':
            return <Image width={40} height={40} src={"/face3.png"}/>;
        case 'good':
            return <Image width={40} height={40} src={"/face4.png"}/>;
        case 'very good':
            return <Image width={40} height={40} src={"/face5.png"}/>;
        default:
            return <Image width={40} height={40} src={"/face3.png"}/>;
    }
}

export default function FeelingJournal() {

    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down("md"), {
        noSsr: false
    });

    const InfoCard = ({children, sx}) => {
        const theme = useTheme();

        return (<Box sx={{
            backgroundColor: "#EFFDF3", padding: 1.5, m: 1, borderRadius: 2, ...sx
        }}>
            {children}
        </Box>)
    }

    const events = [
        {
            title: 'good',
            start: new Date('2024-01-09'),
            desc1: 'lorem ipsum lorem ipsum',
            desc2: 'lorem ipsum lorem ipsum',
            desc3: 'lorem ipsum lorem ipsum'
        },
        {
            title: 'bad',
            start: new Date('2024-01-10'),
            desc1: 'lorem ipsum lorem ipsum',
            desc2: 'lorem ipsum lorem ipsum',
            desc3: 'lorem ipsum lorem ipsum'
        },
        {
            title: 'neutral',
            start: new Date('2024-01-11'),
            desc1: 'lorem ipsum lorem ipsum',
            desc2: 'lorem ipsum lorem ipsum',
            desc3: 'lorem ipsum lorem ipsum'
        },
        {
            title: 'very bad',
            start: new Date('2024-01-12'),
            desc1: 'lorem ipsum lorem ipsum',
            desc2: 'lorem ipsum lorem ipsum',
            desc3: 'lorem ipsum lorem ipsum'
        },
        {
            title: 'very good',
            start: new Date('2024-01-13'),
            desc1: 'lorem ipsum lorem ipsum',
            desc2: 'lorem ipsum lorem ipsum',
            desc3: 'lorem ipsum lorem ipsum'
        },
        {
            title: 'neutral',
            start: new Date('2024-01-14'),
            desc1: 'lorem ipsum lorem ipsum',
            desc2: 'lorem ipsum lorem ipsum',
            desc3: 'lorem ipsum lorem ipsum'
        },
        {
            title: 'good',
            start: new Date('2024-01-15'),
            desc1: 'lorem ipsum lorem ipsum',
            desc2: 'lorem ipsum lorem ipsum',
            desc3: 'lorem ipsum lorem ipsum'
        },
        {
            title: 'bad',
            start: new Date('2024-01-16'),
            desc1: 'lorem ipsum lorem ipsum',
            desc2: 'lorem ipsum lorem ipsum',
            desc3: 'lorem ipsum lorem ipsum'
        },
        {
            title: 'neutral',
            start: new Date('2024-01-17'),
            desc1: 'lorem ipsum lorem ipsum',
            desc2: 'lorem ipsum lorem ipsum',
            desc3: 'lorem ipsum lorem ipsum'
        },
        {
            title: 'very bad',
            start: new Date('2024-01-18'),
            desc1: 'lorem ipsum lorem ipsum',
            desc2: 'lorem ipsum lorem ipsum',
            desc3: 'lorem ipsum lorem ipsum'
        },
        {
            title: 'very good',
            start: new Date('2024-01-19'),
            desc1: 'lorem ipsum lorem ipsum',
            desc2: 'lorem ipsum lorem ipsum',
            desc3: 'lorem ipsum lorem ipsum'
        },
        {
            title: 'neutral',
            start: new Date('2024-01-20'),
            desc1: 'lorem ipsum lorem ipsum',
            desc2: 'lorem ipsum lorem ipsum',
            desc3: 'lorem ipsum lorem ipsum'
        }
    ];

    function renderEventContent(eventInfo) {
        return (
            <Box sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                textAlign: "center",
                alignItem: "center"
            }}>
                {matchWellbeingIcon(eventInfo.event.title)}
            </Box>
        )
    }

    const [createOpen, setCreateOpen] = useState(false);
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    function handleEventClick(clickInfo) {
        setSelectedEvent(clickInfo.event);
        setDetailsOpen(true);
    }

    function handleDetailsClose() {
        setDetailsOpen(false);
        setCreateOpen(false);
        setSelectedEvent(null);
    }

    return (
        <Layout>
            <Navbar/>
            <Dialog fullWidth maxWidth="sm" open={createOpen} onClose={handleDetailsClose}>
                <DialogContent sx={{backgroundColor: "#D9EDDF"}}>
                    <Box sx={{
                        borderRadius: "10px",
                        backgroundColor: "#EFFDF3",
                        p: 2,
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Typography sx={{mb: 4}} variant={"h6"}>Jak sie dziś czujesz?</Typography>
                        <Stack direction="row" spacing={5}>
                            <Box sx={{cursor: 'pointer'}}>
                                {matchWellbeingIcon('very bad')}
                            </Box>
                            <Box sx={{cursor: 'pointer'}}>
                                {matchWellbeingIcon('bad')}
                            </Box>
                            <Box sx={{cursor: 'pointer'}}>
                                {matchWellbeingIcon('neutral')}
                            </Box>
                            <Box sx={{cursor: 'pointer'}}>
                                {matchWellbeingIcon('good')}
                            </Box>
                            <Box sx={{cursor: 'pointer'}}>
                                {matchWellbeingIcon('very good')}
                            </Box>
                        </Stack>
                    </Box>

                    <Box sx={{
                        borderRadius: "10px",
                        mt: 2,
                        backgroundColor: "#EFFDF3",
                        p: 2,
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Typography variant={"h6"}>Napisz co Cię dzisiaj spotkało</Typography>
                        <TextField
                            sx={{my: 3, width: 300}}
                            variant={"outlined"}

                            label="Opisz swój dzień"
                        />
                        <Button variant="contained" onClick={handleDetailsClose}>Dodaj opis</Button>
                    </Box>
                </DialogContent>
            </Dialog>
            <Dialog fullWidth maxWidth="xs" open={detailsOpen} onClose={handleDetailsClose}>
                <DialogContent sx={{backgroundColor: "#D9EDDF"}}>
                    <Box sx={{
                        borderRadius: "10px",
                        mt: 2,
                        backgroundColor: "#EFFDF3",
                        p: 2,
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Typography variant="h6">Tego dnia...</Typography>
                        <Typography variant="body1"> {selectedEvent?.extendedProps.desc2}</Typography>
                    </Box>
                </DialogContent>
            </Dialog>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <Stack sx={{mt: 4, px: 5}} textAlign="left">
                    <Stack direction="row" justifyContent="space-between">
                        <InfoCard>
                            <Box>
                                <Typography fontWeight={600} variant={"h6"} sx={{
                                    display: 'flex', alignItems: 'center', fontSize: '1.5rem'
                                }}>
                                    <Image
                                        style={{paddingLeft: 0, paddingRight: 10,}}
                                        src={"/icons/Notebook.svg"} width={40} height={40}
                                        alt={"Book"}/>
                                    Dziennik
                                </Typography>
                            </Box>
                        </InfoCard>
                        <Box sx={{transform: "translateY(25px)"}}>
                            <Button onClick={() => setIsNewDataModelOpen(true)} height="40px" variant="contained">Dodaj nowy
                                wpis</Button>
                        </Box>
                    </Stack>


                    <Card sx={{mt: 4, mb: 5}}>
                        <CardContent>
                            <FullCalendar
                                headerToolbar={{
                                    left: 'prev',
                                    center: 'title',
                                    right: 'next',
                                }}
                                views={{
                                    timeGridMonth: {
                                        duration: isMobile ? {days: 5} : {days: 7},
                                    },
                                }}
                                plugins={[dayGridPlugin]}
                                initialView='dayGridMonth'
                                weekends={true}
                                events={events}
                                eventContent={renderEventContent}
                                locale={plLocale}

                                eventClick={handleEventClick}
                            />
                        </CardContent>
                    </Card>

                </Stack>
            </Box>
        </Layout>
    );
}