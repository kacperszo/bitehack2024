import * as React from "react";
import {useState} from "react";
import {Avatar, Box, Button, Grid, Paper, TextField, Typography,} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Chat() {
  const [input, setInput] = React.useState("");

  const [messages, setMessages] = useState([
    {
      text: "Jak sie dzisiaj czujecie?",
      sender: {id: 1, email: 'user1@example.com', displayName: 'Sprytny Wilk', type: 'addict', color: 'red'}
    },
    {
      text: "Jest okej, a u Ciebie?",
      sender: {id: 2, email: 'user2@example.com', displayName: 'Dzielny Dzik', type: 'addict', color: 'green'}
    },
    {
      text: "U mnie też jest okej. Ciągnie mnie strasznie do złego. Co robicie gdy macie w głowie czarne myśli?",
      sender: {id: 3, email: 'user3@example.com', displayName: 'Mądra Zebra', type: 'addict', color: 'blue'}
    },
    ])

    const handleSend = () => {
        if (input.trim() !== "") {
            setMessages([...messages, {
                sender: {id: 2, email: 'user2@example.com', displayName: 'Dzielny Dzik', type: 'addict', color: 'green'},
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
                bgcolor: "grey.200",
            }}
        >
            <Box sx={{flexGrow: 1, overflow: "auto", p: 2}}>
                {messages.map((message, index) => (
                    <Message key={index} message={message}/>
                ))}
            </Box>
            <Box sx={{p: 2, backgroundColor: "background.default"}}>
              <Grid container spacing={1}>
                <Grid item xs={10}>
                  <TextField
                    size="small"
                    fullWidth
                    placeholder="Wpisz wiadomość"
                    variant="outlined"
                    value={input}
                    onChange={handleInputChange}
                  />
                </Grid>
                    <Grid item xs={2}>
                        <Button
                            fullWidth
                            color="primary"
                            variant="contained"
                            endIcon={<SendIcon/>}
                            onClick={handleSend}
                        >
                          Wyślij
                        </Button>
                    </Grid>
                </Grid>
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
                <Avatar sx={{bgcolor: color}}>
                    {displayName.split(' ')[0][0]}
                </Avatar>
                <Paper
                    variant="outlined"
                    sx={{
                        p: 2,
                        ml: !isLogged ? 1 : 0,
                        mr: !isLogged ? 0 : 1,
                        backgroundColor: !isLogged ? "primary.light" : "secondary.light",
                        borderRadius: !isLogged ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
                    }}
                >
                    <Typography variant="body1">{text}</Typography>
                </Paper>
            </Box>
        </Box>
    );
};