import Navbar from "@/components/navbar";
import UserTile from "@/components/mygroup/userTile";
import {Box, Card, CardContent, Stack, Typography} from "@mui/material";
import Chat from "@/components/mygroup/Chat";
import Layout from "@/components/layout";

export default function MyGroupPage({group}) {
    const {name, users} = group

    return (
        <Layout>
            <Navbar/>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%'
                }}
            >
                <Stack sx={{mt: 4, px: 5, height: '100%'}} textAlign="left">
                    <Stack direction="row">
                        <Box flexGrow={1} sx={{
                            textAlign: 'center'
                        }}>
                            <Typography variant="h4">
                                Moja grupa do wzajemnego wsparcia
                            </Typography>
                            <Typography variant="body2">
                                Porozmawiaj z osobami, które mogą zmagać się z tym samym problemem.
                                <br/>
                                System automatycznie przypisuje do Twojej grupy osoby, które zmagają się z tym samym
                                uzależnieniem.
                                <br/>
                                W czacie obecny jest nasz specjalista, który na bieżąco monitoruje waszą sytuację.
                            </Typography>
                        </Box>
                    </Stack>
                    <Card sx={{ pb: 4, height: '100%', boxShadow: 'none'}}>
                        <CardContent sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
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
                                paddingBottom: 1,
                                flex: '1',
                                overflow: 'auto'
                            }}>
                                <Chat/>
                            </Box>
                        </CardContent>
                    </Card>
                </Stack>
            </Box>
        </Layout>
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
            {
                id: 5,
                email: 'psychiatrist@example.com',
                displayName: 'Jan Kowalski | Poradnia.pl',
                type: 'psychiatrist',
                color: 'violet'
            }
        ]
    }

    return {props: {group}}
})