import {Box, Card, CardContent, Stack, Typography} from "@mui/material";
import Navbar from "@/components/navbar";
import dayGridPlugin from '@fullcalendar/daygrid'
import FullCalendar from "@fullcalendar/react";
import plLocale from '@fullcalendar/core/locales/pl';

export default function AppHome() {
  const events = [
    {title: 'Dobrze', start: new Date('15.01.2024 15:00')},
    {title: 'Dobrze', start: new Date('16-01-2024')},
    {title: 'Dobrze', start: new Date('17-01-2024')},
    {title: 'Dobrze', start: new Date('18-01-2024')},
    {title: 'Dobrze', start: new Date('19-01-2024')},
    {title: 'Dobrze', start: new Date('20-01-2024')}
  ];

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

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
        <Stack sx={{mt: 2, px: 5}} textAlign="left">
          <Typography variant="h4">
            Dziennik samopoczucia
          </Typography>

          <Card sx={{mt: 3}}>
            <CardContent>
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                weekends={true}
                events={events}
                eventContent={renderEventContent}
                locale={plLocale}
              />
            </CardContent>
          </Card>

        </Stack>
      </Box>
    </>
  );
}