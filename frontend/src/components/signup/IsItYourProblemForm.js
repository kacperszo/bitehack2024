import {useState} from "react";
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Typography,
    useTheme
} from "@mui/material";
import {Label} from "@mui/icons-material";

export default function IsItYourProblemForm({value, setValue}) {

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

    return (<Box sx={{
        paddingBottom: 1, width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"

    }}>
        <Box>
            <Typography textAlign={"center"} sx={{display: "block", p: 3}} fontWeight={600} variant={"h4"}>Kogo dotyczy
                problem uzależnienia?</Typography>
            <Typography sx={{display: "block", p: 3}} textAlign={"center"} variant={"subheader"}>Dzięki temu będzieś
                miał/a
                dostęp do odpowiednich funkcji aplikacji</Typography>
        </Box>
        <Box sx={{width: "100%", maxWidth: 400}}>
            <Button fullWidth variant={value ? "contained" : "outlined"}
                    onClick={() => setValue(true)}
                    sx={value ? ({...sharedBtnStyle, ...selectedBtnStyle}) : ({...sharedBtnStyle, ...notSelectedBtnStyle})}
            >Mnie</Button>
            <Button fullWidth variant={(!value) ? "contained" : "outlined"}
                    onClick={() => setValue(false)}
                    sx={(!value) ? ({...sharedBtnStyle, ...selectedBtnStyle}) : ({...sharedBtnStyle, ...notSelectedBtnStyle})}
            >Kogoś innego</Button>
        </Box>
    </Box>)
}