import {useState} from "react";
import {Box, Button, Checkbox, FormControl, FormControlLabel, RadioGroup, Typography, useTheme} from "@mui/material";

export default function WhatAreYourAddictionForm({value, setValue}) {
    function handleChange(key, checked) {
        if (checked) {
            setValue((values) => [...values, key])
        } else {
            setValue((values) => values.filter(v => v !== key))
        }
    }

    const theme = useTheme()
    const sharedBtnStyle = {
        padding: 2, marginTop: 2, width: "100%", display: "block",
    }
    const selectedBtnStyle = {
        backgroundColor: theme.palette.primary.dark,
    }
    const notSelectedBtnStyle = {
        color: theme.palette.primary.dark, borderColor: theme.palette.primary.dark,
        // borderWidth: "2px" will break hover effect
    }
    const addictions = ["Alkohol", "Kofeina", "Papierosy", "Seks", "Narkotyki", "Jedzenie", "Zakupy"];
    return (<Box sx={{
        paddingBottom: 1, width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"

    }}>
        <Box>
            <Typography textAlign={"center"} sx={{display: "block", p: 3}} fontWeight={600} variant={"h4"}>Czy trafiłeś
                tutaj z
                kilniki?</Typography>
            <Typography sx={{display: "block", p: 3}} textAlign={"center"} variant={"subheader"}>Ta informacja
                usprawni
                process
                rejestracji</Typography>
        </Box>
        <Box sx={{width: "100%", maxWidth: 400, height: 300, overflowY: "auto"}}>
            {
                addictions.map(addiction => (
                    <Button fullWidth variant={value.includes(addiction) ? "contained" : "outlined"}
                            onClick={() => handleChange(addiction, !value.includes(addiction))}
                            sx={value.includes(addiction) ? ({...sharedBtnStyle, ...selectedBtnStyle}) : ({...sharedBtnStyle, ...notSelectedBtnStyle})}
                    >{addiction}</Button>
                ))
            }

        </Box>
    </Box>)
}
