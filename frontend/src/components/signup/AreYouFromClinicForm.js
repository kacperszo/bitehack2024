import {Box, Button, Typography, useTheme} from "@mui/material";

export default function AreYouFromClinicForm({value, setValue}) {
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
      <Typography textAlign={"center"} sx={{display: "block", p: 3, pb: 0}} fontWeight={600} variant={"h4"}>Czy trafiłeś
        tutaj z
        kilniki?</Typography>
      <Typography sx={{display: "block", p: 3, pt: 1}} textAlign={"center"} variant={"subheader"}>Ta informacja
        usprawni
        process
        rejestracji</Typography>
    </Box>
    <Box sx={{width: "100%", maxWidth: 400}}>
      <Button fullWidth variant={value ? "contained" : "outlined"}
              onClick={() => setValue(true)}
              sx={value ? ({...sharedBtnStyle, ...selectedBtnStyle}) : ({...sharedBtnStyle, ...notSelectedBtnStyle})}
      >Tak</Button>
      <Button fullWidth variant={(!value) ? "contained" : "outlined"}
              onClick={() => setValue(false)}
              sx={(!value) ? ({...sharedBtnStyle, ...selectedBtnStyle}) : ({...sharedBtnStyle, ...notSelectedBtnStyle})}
      >Nie</Button>
    </Box>
  </Box>)
}
