import {useEffect, useState} from "react";
import {
    Box,
    FormControl,
    TextField,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Typography,
    IconButton, InputAdornment
} from "@mui/material";
import {Icon} from '@iconify/react';

import {Label} from "@mui/icons-material";

export default function GenerateYourNicknameForm({value, setValue}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    useEffect(() => {
        randomNick();
    }, []);
    const randomNick = () => {
        const adjectives = ['Szybki', 'Leniwy', 'Wesoly', 'Mądry', 'Bystry', 'Dzielny', 'Zwinny', 'Ostrożny', "Rzeczny", "Mądry", "Dziki", "Niebezpieczny", "Miły"];
        const animals = ['Lew', 'Tygrys', 'Niedzwiedz', 'Zebra', 'Koń', 'Wilk', 'Ryś', 'Orzeł', "Pies", "Kot", "Dzik", "Wunsz"];

        const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const animal = animals[Math.floor(Math.random() * animals.length)];

        setValue(`${adjective} ${animal}`);
    }
    return (
        <Box sx={{
            paddingTop: 2,
            paddingBottom: 1,
            width: "100%"
        }}>
            <Box>
                <Typography textAlign={"center"} sx={{display: "block", p: 3}} fontWeight={600} variant={"h4"}>Utwórz
                    konto</Typography>
                <Typography sx={{display: "block", p: 2}} textAlign={"center"} variant={"subheader"}>Twój adress email
                    jest nam potrzebny do utworzenia konta. Chcemy abyś był w pełni anonimowy - wygeneruj swój
                    nickname</Typography>
            </Box>
            <TextField sx={{marginTop: 2}}
                       contentEditable={false}
                       fullWidth
                       value={value}
                       label={"pseudonim"}
                       InputProps={{
                           endAdornment: <InputAdornment position="end">
                               <IconButton onClick={randomNick}>
                                   <Icon icon={"game-icons:perspective-dice-six-faces-random"}/>
                               </IconButton>
                           </InputAdornment>,
                       }}/>
            <TextField sx={{marginTop: 2}}
                       fullWidth
                       type="email"
                       label={"email"}
                       value={email}
                       onChange={e => setEmail(e.target.value)}

            />
            <TextField sx={{marginTop: 2}}
                       type="password"
                       fullWidth
                       label={"password"}
                       onChange={e => setPassword(e.target.value)}
            />
        </Box>
    )
}