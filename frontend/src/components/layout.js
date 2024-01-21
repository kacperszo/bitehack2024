import {Box, MenuItem, useTheme} from "@mui/material";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Image from "next/image";

const isActive = (href) => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(typeof window !== 'undefined');
    }, []);

    if (router.isReady && isClient) {
        return window.location.href.endsWith(href);
    }
    return false;
}

export default function Layout({children}) {
    const router = useRouter();

    const theme = useTheme();

    const handleMenuItemClick = (href) => {
        router.push(href);
    }

    const menuItems = [
        {path: "/knowledge-base", label: "Baza pomocy i wiedzy", icon: ""},
        {path: "/journal", label: "Dziennik", icon: "Calendar.svg"},
        {path: "/feeling-journal", label: "Dziennik samopoczucia", icon: "Notebook.svg"},
        {path: "/my-group", label: "Moja grupa", icon: "Direct Hit.svg"},
        {path: "/consultation", label: "Konsultacja", icon: ""},
        {path: "/sos", label: "SOS!", icon: "Warning.svg"},
    ]

    return (
        <>
            <Box sx={{
                display: {xs: 'none', lg: 'flex'},
                flexDirection: 'row',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: theme.palette.primary.light
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '25vw',
                    height: '100%'
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '2rem',
                        paddingTop: '2.5vh',
                        width: '100%'
                    }}>
                        <Image alt="logo" src={'/logo.png'} width={100} height={100}/>
                        odNowa
                    </Box>
                    <Box sx={{
                        flex: '1',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {menuItems.map((item, index) => {
                            const {path, label, icon} = item
                            return (
                                <MenuItem key={index} sx={{fontFamily: 'Poppins', width: '100%'}}
                                          onClick={() => handleMenuItemClick(`/app${path}`)}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 4,
                                        paddingX: 4,
                                        fontSize: 20,
                                        textWrap: 'wrap',
                                    }}>
                                        <Image alt={label} src={`/icons/${icon}`} width={36} height={36}/>
                                        <p style={{...(isActive(`app${path}`) && {fontWeight: 'bold'})}}>{label}</p>
                                    </Box>
                                </MenuItem>
                            )
                        })}
                    </Box>
                </Box>
                <Box sx={{
                    width: '100%',
                    backgroundColor: theme.palette.background,
                    borderRadius: '25px',
                    height: '95vh',
                    overflowY: "auto",
                    marginRight: '2.5vh',
                }}>
                    {children}
                </Box>
            </Box>
            <Box sx={{
                display: {xs: 'block', lg: 'none'}
            }}>
                {children}
            </Box>
        </>
    )
}