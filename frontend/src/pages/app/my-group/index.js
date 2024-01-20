import Navbar from "@/components/navbar";
import UserTile from "@/components/mygroup/userTile";
import {Box} from "@mui/material";
import Chat from "@/components/mygroup/Chat";

export default function MyGroupPage({group}) {
    const {name, users} = group

    return (
        <>
            <Navbar/>
            <Box sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingTop: 2,
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
                <Chat />
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