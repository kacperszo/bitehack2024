import {Box, Button, Card, CardContent, Dialog, DialogContent, Stack, Typography} from "@mui/material";
import Navbar from "@/components/navbar";
import dayGridPlugin from '@fullcalendar/daygrid'
import FullCalendar from "@fullcalendar/react";
import plLocale from '@fullcalendar/core/locales/pl';

import DangerousIcon from '@mui/icons-material/Dangerous';
import React, {useState} from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import {matchWellbeingIcon} from "@/pages/app/feeling-journal";

export const getIcon = () => {
    const iconStyle = {
        fontSize: '50'
    };
    return <Image width={40} height={40} src={"/face5.png"}/>;

}

export default function Journal() {

    const [isNewDataModelOpen, setIsNewDataModelOpen] = useState(false)

    const events = [{
        start: new Date('2024-01-09'),
    }, {
        start: new Date('2024-01-10'),
    }, {
        start: new Date('2024-01-11'),
    }, {
        start: new Date('2024-01-12'),
    }, {
        start: new Date('2024-01-13'),
    }, {
        start: new Date('2024-01-14'),
    }, {
        start: new Date('2024-01-15'),
    }, {
        start: new Date('2024-01-16'),
    }, {
        start: new Date('2024-01-17'),
    }, {
        start: new Date('2024-01-18'),
    }, {
        start: new Date('2024-01-19'),
    }, {
        start: new Date('2024-01-20'),
    }];

    function renderEventContent(eventInfo) {
        return (<Box sx={{
            display: "flex", width: "100%", justifyContent: "center", alignItem: "center",
        }}>
            {getIcon()}
            <p>
                {eventInfo.event.title}
            </p>
        </Box>)
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

    return (<Layout>
        <Navbar/>
        <Dialog open={isNewDataModelOpen} onClose={() => setIsNewDataModelOpen(false)}>
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
                    <Typography sx={{mb: 4}} variant={"h6"}>Czy udało ci się dziś wygrać z nałogiem</Typography>
                    <Stack>
                        <Stack direction="row" spacing={5}>
                            <Box sx={{cursor: 'pointer'}}>
                                <Stack spacing={2} direction={"column"}
                                       sx={{justifyContent: "center", alignItems: "center"}}>
                                    <Image width={40} height={40} src={"/face5.png"}/>
                                    <Button sx={{width: 150}} variant={"contained"}>Tak</Button>
                                </Stack>
                            </Box>
                            <Box sx={{cursor: 'pointer'}}>
                                <Stack spacing={2} direction={"column"}
                                       sx={{justifyContent: "center", alignItems: "center"}}>
                                    <Image width={40} height={40} src={"/face2.png"}/>
                                    <Button sx={{width: 150}} variant={"outlined"}>Nie tym razem</Button>
                                </Stack>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
            </DialogContent>
        </Dialog>
        <Box
            sx={{
                display: 'flex', flexDirection: 'column', backgroundSize: 'cover', backgroundPosition: 'center'
            }}
        >
            <Stack sx={{mt: 4, px: 5}} textAlign="left">
                <Stack direction="row">
                    <Box flexGrow={1}>
                        <Typography fontWeight={600} variant="h4">
                            <Image
                                style={{paddingLeft: 10, paddingRight: 10,}}
                                src={"/icons/Book.svg"} width={30} height={30}
                                alt={"Book"}/>
                            Dziennik
                        </Typography>
                    </Box>
                    <Button onClick={() => setIsNewDataModelOpen(true)} variant="contained">Dodaj nowy wpis</Button>
                </Stack>

                <Card sx={{mt: 4, mb: 5}}>
                    <CardContent>
                        <FullCalendar
                            headerToolbar={{
                                left: 'prev',
                                center: 'title',
                                right: 'next',
                            }}
                            height={'75vh'}
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
    </Layout>);
}