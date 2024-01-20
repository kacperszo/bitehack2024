import {useState} from "react";
import {Box, FormControl, TextField, FormControlLabel, FormLabel, Radio, RadioGroup, Typography} from "@mui/material";
import {Label} from "@mui/icons-material";

export default function ClinicCodeForm({value, setValue}) {
    return (
        <Box sx={{
            paddingTop: 2,
            paddingBottom: 1,
        }}>
            <FormControl>
                <Typography id="radio-select-are-you-from-clinic">Podaj kod który otrzymałeś w klinice</Typography>
                <TextField sx={{marginTop: 2}} fullWidth value={value} onChange={e => setValue(e.target.value)}/>
            </FormControl>
        </Box>
    )
}