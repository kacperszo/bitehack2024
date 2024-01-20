import {useState} from "react";
import {Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography} from "@mui/material";
import {Label} from "@mui/icons-material";

export default function AreYouFromClinicForm({value, setValue}) {
    return (
        <Box sx={{
            paddingTop: 2,
            paddingBottom: 1,
        }}>
            <FormControl>
                <Typography id="radio-select-are-you-from-clinic">Czy trafiłeś tutaj z kliniki?</Typography>
                <RadioGroup
                    aria-labelledby="radio-select-are-you-from-clinic"
                    defaultValue={false}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    name="radio-select-are-you-from-clinic"
                >
                    <FormControlLabel value={true} control={<Radio/>} label="Tak"/>
                    <FormControlLabel value={false} control={<Radio/>} label="Nie"/>
                </RadioGroup>
            </FormControl>
        </Box>
    )
}