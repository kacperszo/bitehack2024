import {Box, Button, Card, CardContent, Dialog, DialogContent, Stack, Typography} from "@mui/material";
import Navbar from "@/components/navbar";
import dayGridPlugin from '@fullcalendar/daygrid'
import FullCalendar from "@fullcalendar/react";
import plLocale from '@fullcalendar/core/locales/pl';

import DangerousIcon from '@mui/icons-material/Dangerous';
import {useState} from "react";

export const getIcon = () => {
    const iconStyle = {
        fontSize: '50'
    };
    return <DangerousIcon style={{...iconStyle, color: 'red'}}/>;

}

export default function Journal() {
    const events = [
        {
            start: new Date('2024-01-09'),
            title: "Piwo",
            howMuch: "1 cup",
        },
        {
            title: "Piwo",
            howMuch: "1 cup",
            start: new Date('2024-01-10'),
        },
        {
            start: new Date('2024-01-11'),
            title: "Piwo",
            howMuch: "1 cup",
        },
        {
            title: "Piwo",
            howMuch: "1 cup",
            start: new Date('2024-01-12'),
        },
        {
            title: "Piwo",
            howMuch: "1 cup",
            start: new Date('2024-01-13'),
        },
        {
            title: "Piwo",
            howMuch: "1 cup",
            start: new Date('2024-01-14'),
        },
        {
            title: "Piwo",
            howMuch: "1 cup",
            start: new Date('2024-01-15'),
        },
        {
            title: "Piwo",
            howMuch: "1 cup",
            start: new Date('2024-01-16'),
        },
        {
            title: "Piwo",
            howMuch: "1 cup",
            start: new Date('2024-01-17'),
        },
        {
            title: "Piwo",
            howMuch: "1 cup",
            start: new Date('2024-01-18'),
        },
        {
            title: "Piwo",
            howMuch: "1 cup",
            start: new Date('2024-01-19'),
        },
        {
            title: "Piwo",
            howMuch: "1 cup",
            start: new Date('2024-01-20'),
        }
    ];

    function renderEventContent(eventInfo) {
        return (
            <>
                {getIcon()}
                <p>
                    {
                        eventInfo.event.title
                    }
                </p>
            </>
        )
    }

    const [detailsOpen, setDetailsOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    function handleEventClick(clickInfo) {
        setSelectedEvent(clickInfo.event);
        setDetailsOpen(true);
    }

    function handleDetailsClose() {
        setDetailsOpen(false);
        setSelectedEvent(null);
    }

    return (
        <>
            <Navbar/>
            <Dialog open={detailsOpen} onClose={handleDetailsClose}>
                <DialogContent>
                    {selectedEvent?.title}-{selectedEvent?.extendedProps.howMuch}
                </DialogContent>
            </Dialog>
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
                                Dziennik
                            </Typography>
                        </Box>
                        <Button variant="contained">Dodaj nowy wpis</Button>
                    </Stack>


                    <Card sx={{mt: 4, mb: 5}}>
                        <CardContent>
                            <FullCalendar
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
        </>
    );
}