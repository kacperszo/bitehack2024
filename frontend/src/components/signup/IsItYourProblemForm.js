import {Box, Button, Typography, useTheme} from "@mui/material";

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
  }

  return (<Box sx={{
    paddingBottom: 1, width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"

  }}>
    <Box>
      <Typography textAlign={"center"} sx={{display: "block", p: 3, pb: 0}} fontWeight={600} variant={"h4"}>Kogo dotyczy
        problem uzależnienia?</Typography>
      <Typography sx={{display: "block", p: 3, pt: 1}} textAlign={"center"} variant={"subheader"}>Dzięki temu będzieś
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