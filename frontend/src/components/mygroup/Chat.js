import * as React from "react";
import {useState} from "react";
import {Avatar, Box, Button, Grid, Paper, TextField, Typography,} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Chat() {
    const [input, setInput] = React.useState("");

    const [messages, setMessages] = useState([
        {
            text: "Jak sie dzisiaj czujecie?",
            sender: {id: 1, email: 'user1@example.com', displayName: 'Sprytny Wilk', type: 'addict', color: '#264653'}
        },
        {
            text: "Ciężko jest",
            sender: {id: 2, email: 'user2@example.com', displayName: 'Dzielny Dzik', type: 'addict', color: '#2A9D8F'}
        },
        {
            text: "Trzymaj się stary",
            sender: {id: 3, email: 'user3@example.com', displayName: 'Mądra Zebra', type: 'addict', color: '#E9C46A'}
        },
    ])

    const handleSend = () => {
        if (input.trim() !== "") {
            setMessages([...messages, {
                sender: {
                    id: 2,
                    email: 'user2@example.com',
                    displayName: 'Dzielny Dzik',
                    type: 'addict',
                    color: 'green'
                },
                text: input
            }])
            setInput("");
        }
    };

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                overflow: 'auto',
                height: '100%',
                backgroundColor: {xs: "#EFFDF3", lg: "#D9EDDF"},
                px: {xs: 1, lg: 4},
                borderRadius: 2
            }}
        >
            <Typography sx={{color: '#00350D', textAlign: 'center', my: 2, fontSize: '1.5rem', fontWeight: '600'}}>Grupa
                Wilk, Dzik...</Typography>
            <Box sx={{flexGrow: 1, overflow: "auto", p: 2}}>
                {messages.map((message, index) => (
                    <Message key={index} message={message}/>
                ))}
            </Box>
            <Box sx={{p: 2}}>
                <TextField
                    sx={{border: '1px solid #00350D', borderRadius: 2, width: '100%'}}
                    size="small"
                    fullWidth
                    placeholder="Wyślij wiadomość"
                    variant="outlined"
                    value={input}
                    onChange={handleInputChange}
                    InputProps={{
                        endAdornment: (
                            <Button
                                sx={{
                                    backgroundColor: 'transparent !important',
                                    color: '#00350D',
                                    boxShadow: 'none !important',
                                    outline: 'none',
                                    p: 2,
                                    border: 'none'
                                }}
                                variant="contained"
                                endIcon={<SendIcon />}
                                onClick={handleSend}
                            >
                            </Button>
                        )
                    }}
                />
            </Box>
        </Box>
    );
};

const Message = ({message}) => {
    const {sender, text} = message;

    const {displayName, color} = sender;

    const isLogged = displayName === 'Dzielny Dzik'

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: !isLogged ? "flex-start" : "flex-end",
                mb: 2,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: !isLogged ? "row" : "row-reverse",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{bgcolor: color, color: 'white'}}>
                    {displayName.split(' ')[0][0]}
                </Avatar>
                <Paper
                    variant="outlined"
                    sx={{
                        p: 1,
                        ml: !isLogged ? 1 : 0,
                        mr: !isLogged ? 0 : 1,
                        backgroundColor: !isLogged ? {xs: "#D9EDDF", lg: "#EFFDF3"} : "#56B984",
                        color: isLogged ? 'white' : '#00350D',
                        borderRadius: !isLogged ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
                        pr: !isLogged ? 5 : 1,
                    }}
                >
                    <Typography variant="body1">{text}</Typography>
                </Paper>
            </Box>
        </Box>
    );
};