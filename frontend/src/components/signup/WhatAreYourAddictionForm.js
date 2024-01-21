import {Box, Button, Typography, useTheme} from "@mui/material";

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
      <Typography textAlign={"center"} sx={{display: "block", p: 3, pb: 0}} fontWeight={600} variant={"h4"}>Powiedz
        nam z czym masz problem</Typography>
      <Typography sx={{display: "block", p: 3, pt: 1}} textAlign={"center"} variant={"subheader"}>Opowiedz, z
        którymi uzależnieniami się borykasz a my postaramy się ci pomóc</Typography>
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
