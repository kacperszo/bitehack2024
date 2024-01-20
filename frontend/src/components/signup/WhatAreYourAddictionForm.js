import {useState} from "react";
import {Box, Checkbox, FormControl, FormControlLabel, RadioGroup, Typography} from "@mui/material";

export default function WhatAreYourAddictionForm({value, setValue}) {
    function handleChange(key, checked) {
        if (checked) {
            setValue((values) => [...values, key])
        } else {
            setValue((values) => values.filter(v => v !== key))
        }
    }

    return (
        <Box sx={{
            paddingTop: 2,
            paddingBottom: 1,
            width: "100%",
        }}>
            <FormControl sx={{
                width: "100%",
            }}>
                <Typography id="radio-select-are-you-from-clinic">Czego dotyczy Twój problem?</Typography>
                <RadioGroup
                    aria-labelledby="radio-select-are-you-from-clinic"
                    defaultValue={false}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    name="radio-select-are-you-from-clinic"
                >
                    <Box
                        sx={{
                            overflowY: "scroll",
                            overflowX: "hidden",
                            width: "100%",
                            height: "12rem",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >

                        <FormControlLabel sx={{width: "100%", display: "block"}} control={<Checkbox
                            onChange={e => handleChange("Alkohol", e.target.checked)}/>} label="Alkohol"/>
                        <FormControlLabel sx={{width: "100%", display: "block"}} control={<Checkbox
                            onChange={e => handleChange("Narkotyki", e.target.checked)}/>} label="Narkotyki"/>
                        <FormControlLabel sx={{width: "100%", display: "block"}} control={<Checkbox
                            onChange={e => handleChange("Papierosy", e.target.checked)}/>} label="Papierosy"/>
                        <FormControlLabel sx={{width: "100%", display: "block"}}
                                          control={<Checkbox onChange={e => handleChange("Hazard", e.target.checked)}/>}
                                          label="Hazard"/>
                        <FormControlLabel sx={{width: "100%", display: "block"}} control={<Checkbox
                            onChange={e => handleChange("Jedzenie", e.target.checked)}/>} label="Jedzenie"/>
                        <FormControlLabel sx={{width: "100%", display: "block"}} control={<Checkbox
                            onChange={e => handleChange("Internet", e.target.checked)}/>} label="Internet"/>
                        <FormControlLabel sx={{width: "100%", display: "block"}} control={<Checkbox
                            onChange={e => handleChange("Kofeina", e.target.checked)}/>} label="Kofeina"/>
                        <FormControlLabel sx={{width: "100%", display: "block"}}
                                          control={<Checkbox onChange={e => handleChange("Praca", e.target.checked)}/>}
                                          label="Praca"/>
                        <FormControlLabel sx={{width: "100%", display: "block"}}
                                          control={<Checkbox onChange={e => handleChange("Zakupy", e.target.checked)}/>}
                                          label="Zakupy"/>
                        <FormControlLabel sx={{width: "100%", display: "block"}} control={<Checkbox
                            onChange={e => handleChange("Gry komputerowe", e.target.checked)}/>}
                                          label="Gry komputerowe"/>
                        <FormControlLabel sx={{width: "100%", display: "block"}}
                                          control={<Checkbox onChange={e => handleChange("Seks", e.target.checked)}/>}
                                          label="Seks"/>
                        <FormControlLabel sx={{width: "100%", display: "block"}} control={<Checkbox
                            onChange={e => handleChange("Telefon komórkowy", e.target.checked)}/>}
                                          label="Telefon komórkowy"/>
                        <FormControlLabel sx={{width: "100%", display: "block"}} control={<Checkbox
                            onChange={e => handleChange("Mediów społecznościowych", e.target.checked)}/>}
                                          label="Mediów społecznościowych"/>
                        <FormControlLabel sx={{width: "100%", display: "block"}}
                                          control={<Checkbox onChange={e => handleChange("inne", e.target.checked)}/>}
                                          label="inne"/>
                    </Box>
                </RadioGroup>
            </FormControl>
        </Box>
    );
}
