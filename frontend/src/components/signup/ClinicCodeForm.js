import {Box, FormControl, TextField, Typography} from "@mui/material";

export default function ClinicCodeForm({value, setValue}) {
  return (
    <Box sx={{
      paddingTop: 2,
      paddingBottom: 1,
    }}>
      <FormControl>
        <Typography textAlign={"center"} sx={{display: "block", p: 3, pb: 0}} fontWeight={600} variant={"h4"}>Podaj kod
          otrzymany w przychodni</Typography>
        <Typography sx={{display: "block", p: 3, pt: 1}} textAlign={"center"} variant={"subheader"}>Dzięki temu
          zostanie aktywowane twoje konto</Typography> <TextField sx={{marginTop: 2}} fullWidth value={value}
                                                                  onChange={e => setValue(e.target.value)}/>
      </FormControl>
    </Box>
  )
}