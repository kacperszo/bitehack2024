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
                <Typography textAlign={"center"} sx={{display: "block", p: 3}} fontWeight={600} variant={"h4"}>Podaj kod
                    otrzymany w przychodni</Typography>
                <Typography sx={{display: "block", p: 3}} textAlign={"center"} variant={"subheader"}>Dzięki temu
                    zostanie aktywowane twoje konto</Typography> <TextField sx={{marginTop: 2}} fullWidth value={value}
                                                                            onChange={e => setValue(e.target.value)}/>
            </FormControl>
        </Box>
    )
}