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
        }}>
            <FormControl>
                <Typography id="radio-select-are-you-from-clinic">Wygeneruj swój nick</Typography>
                <TextField sx={{marginTop: 2}}
                           contentEditable={false}
                           fullWidth
                           value={value}
                           InputProps={{
                               endAdornment: <InputAdornment position="end">
                                   <IconButton onClick={randomNick}>
                                       <Icon icon={"game-icons:perspective-dice-six-faces-random"}/>
                                   </IconButton>
                               </InputAdornment>,
                           }}/>
            </FormControl>
        </Box>
    )
}