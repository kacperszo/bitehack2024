import Navbar from "@/components/navbar";
import UserTile from "@/components/mygroup/userTile";
import {Box, Card, CardContent, Stack, Typography} from "@mui/material";
import Chat from "@/components/mygroup/Chat";
import Layout from "@/components/layout";
import Image from "next/image";
import * as React from "react";

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
                <Stack sx={{mt: 4, px: 3, height: '100%'}} textAlign="left">
                    <Stack direction="row">
                        <Box flexGrow={1} sx={{
                            textAlign: 'center',
                            backgroundColor: {xs: "#EFFDF3", lg: "transparent"},
                            borderRadius: 2,
                            p: 1
                        }}>
                            <Typography fontWeight={600} variant={"h4"} sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Image
                                    style={{paddingLeft: 10, paddingRight: 10,}}
                                    src={"/icons/Book.svg"} width={30} height={30}
                                    alt={"Book"}/>
                                Moja grupa wsparcia
                            </Typography>
                        </Box>
                    </Stack>
                    <Box sx={{ pt: 5 }}>
                        <Typography sx={{ color: '#2B5B30', fontWeight: 'bold', py: 1 }}>Uczestnicy grupy</Typography>
                        <Box sx={{
                            display: 'flex',
                            gap: 2,
                            alignItems: 'flex-start',
                            justifyContent: { xs: 'flex-start', lg: 'center' },
                            padding: 2,
                            paddingBottom: 1,
                            backgroundColor: {xs: "#EFFDF3", lg: "#D9EDDF"},
                            borderRadius: 2,
                        }} className={'without-x-scrollbar'}>
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
                            <Typography sx={{ fontWeight: 'bold', color: '#2B5B30', mb: 1, mt: 3 }}>Chat</Typography>
                            <Chat/>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Layout>
    )
}

export const getServerSideProps = (async () => {
    const group = {
        name: 'Group 1',
        users: [
            {id: 1, email: 'user1@example.com', displayName: 'Sprytny Wilk', type: 'addict', color: '#264653'},
            {id: 2, email: 'user2@example.com', displayName: 'Dzielny Dzik', type: 'addict', color: '#2A9D8F'},
            {id: 3, email: 'user3@example.com', displayName: 'Mądra Zebra', type: 'addict', color: '#E9C46A'},
            {id: 4, email: 'user4@example.com', displayName: 'Ostrożny Kot', type: 'addict', color: '#F4A261'},
            {
                id: 5,
                email: 'psychiatrist@example.com',
                displayName: 'Jan Kowalski',
                type: 'psychiatrist',
                color: '#E76F51'
            }
        ]
    }

    return {props: {group}}
})