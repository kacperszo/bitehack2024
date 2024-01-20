// import "@/styles/globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {ApolloProvider} from '@apollo/client';
import client from '@/apollo-client'
import {createTheme} from '@mui/material/styles';
import {ThemeProvider} from "@mui/material";
import {teal} from "@mui/material/colors";
import "@/styles/global.scss";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

//TODO move it to separate file
const theme = createTheme({
    palette: {
        primary: {
            light: '#D9EDDF',
            main: '#86E9B1',
            dark: '#00350D',
            contrastText: '#fff',
        },
        secondary: teal,
    },
});
export default function App({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>

            <ApolloProvider client={client}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Component {...pageProps} />
                </LocalizationProvider>
            </ApolloProvider>
        </ThemeProvider>
    )
}
