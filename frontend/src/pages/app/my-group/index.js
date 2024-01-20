import Navbar from "@/components/navbar";
import UserTile from "@/components/mygroup/userTile";
import {Box, Card, CardContent, Stack, Typography} from "@mui/material";
import Chat from "@/components/mygroup/Chat";

export default function MyGroupPage({group}) {
    const {name, users} = group

    return (
      <>
        <Navbar/>
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
                  Moja grupa do wzajemnego wsparcia
                </Typography>
                <Typography variant="body2">
                  Porozmawiaj z osobami, które mogą zmagać się z tym samym problemem.
                  <br/>
                  System automatycznie przypisuje do Twojej grupy osoby, które zmagają się z tym samym uzależnieniem.
                  <br/>
                  W czacie obecny jest nasz specjalista, który na bieżąco monitoruje waszą sytuację.
                </Typography>
              </Box>
            </Stack>
            <Card sx={{mt: 4, mb: 10}}>
              <CardContent>
                <Box sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  paddingTop: 1,
                  paddingBottom: 1,
                }}>
                  {users.map((user, index) => {
                    return (
                      <UserTile key={index} user={user}/>
                    )
                  })}
                </Box>
                <Box sx={{
                  paddingTop: 2,
                  paddingBottom: 1
                }}>
                  <Chat/>
                </Box>
              </CardContent>
            </Card>
          </Stack>
        </Box>
        </>
    )
}

export const getServerSideProps = (async () => {
    const group = {
        name: 'Group 1',
        users: [
            {id: 1, email: 'user1@example.com', displayName: 'Sprytny Wilk', type: 'addict', color: 'red'},
            {id: 2, email: 'user2@example.com', displayName: 'Dzielny Dzik', type: 'addict', color: 'green'},
            {id: 3, email: 'user3@example.com', displayName: 'Mądra Zebra', type: 'addict', color: 'blue'},
            {id: 4, email: 'user4@example.com', displayName: 'Ostrożny Kot', type: 'addict', color: 'orange'},
            {id: 5, email: 'psychiatrist@example.com', displayName: 'Jan Kowalski | Poradnia.pl', type: 'psychiatrist', color: 'violet'}
        ]
    }

    return {props: {group}}
})