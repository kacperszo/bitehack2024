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
  Typography
} from "@mui/material";
import Navbar from "@/components/navbar";
import dayGridPlugin from '@fullcalendar/daygrid'
import FullCalendar from "@fullcalendar/react";
import plLocale from '@fullcalendar/core/locales/pl';

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import {useState} from "react";

export const matchWellbeingIcon = (type) => {
  const iconStyle = {
    fontSize: '50'
  };

  switch (type) {
    case 'very bad':
      return <SentimentVeryDissatisfiedIcon style={{...iconStyle, color: 'darkred'}}/>;
    case 'bad':
      return <SentimentDissatisfiedIcon style={{...iconStyle, color: 'red'}}/>;
    case 'neutral':
      return <SentimentNeutralIcon style={{...iconStyle, color: 'gray'}}/>;
    case 'good':
      return <SentimentSatisfiedIcon style={{...iconStyle, color: 'lightgreen'}}/>;
    case 'very good':
      return <SentimentVerySatisfiedIcon style={{...iconStyle, color: 'green'}}/>;
    default:
      return <SentimentNeutralIcon style={iconStyle}/>;
  }
}

export default function FeelingJournal() {
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
      <>
        {matchWellbeingIcon(eventInfo.event.title)}
      </>
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
    <>
      <Navbar/>
      <Dialog fullWidth maxWidth="sm" open={createOpen} onClose={handleDetailsClose}>
        <DialogTitle>Jak się dzisiaj czujesz?</DialogTitle>
        <DialogContent>
          <Stack direction="row" spacing={1}>
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
          <Stack sx={{mt: 2}} spacing={2}>
            <TextField
              label="Jak się dzisiaj czułeś?"
            />
            <TextField
              label="Jakie były dzisiaj pozytywne wydarzenia?"
            />
            <TextField
              label="Jakie były negatywy dzisiejszego dnia?"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleDetailsClose}>Zamknij</Button>
          <Button variant="contained" onClick={handleDetailsClose}>Zapisz</Button>
        </DialogActions>
      </Dialog>
      <Dialog fullWidth maxWidth="xs" open={detailsOpen} onClose={handleDetailsClose}>
        <DialogContent>
          {matchWellbeingIcon(selectedEvent?.title)}
          <Typography variant="body2">Ogólne samopoczucie: {selectedEvent?.extendedProps.desc1}</Typography>
          <Typography variant="body2">Jakie były pozytywne rzeczy: {selectedEvent?.extendedProps.desc2}</Typography>
          <Typography variant="body2">Jakie były negatywne rzeczy: {selectedEvent?.extendedProps.desc3}</Typography>
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
          <Stack direction="row">
            <Box flexGrow={1}>
              <Typography variant="h4">
                Dziennik samopoczucia
              </Typography>
            </Box>
            <Box>
              <Button variant="contained" onClick={() => setCreateOpen(true)}>Dodaj</Button>
            </Box>
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