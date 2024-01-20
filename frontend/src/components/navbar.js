import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Toolbar,
    Typography, useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Icon} from "@iconify/react";
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

export default function Navbar() {
    const router = useRouter();
    const theme = useTheme();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const handleMenuItemClick = (href) => {
        setIsMobileMenuOpen(false)
        router.push(href);
    }

    const menuItems = [
        {path: "/knowledgeBase", label: "Baza pomocy i wiedzy", icon: ""},
        {path: "/journal", label: "Dziennik", icon: "Calendar.svg"},
        {path: "/feeling-journal", label: "Dziennik samopoczucia", icon: "Notebook.svg"},
        {path: "/my-group", label: "Moja grupa", icon: "Direct Hit.svg"},
        {path: "/consultation", label: "Konsultacja", icon: ""},
        {path: "/sos", label: "SOS!", icon: "Warning.svg"},
    ]

    const renderMobileMenu = (
        <Drawer
            anchor={'right'}
            PaperProps={{
                sx: {
                    width: '75%',
                    backgroundColor: theme.palette.primary.dark,
                    color: theme.palette.primary.contrastText
                }
            }}
            id={mobileMenuId}
            open={isMobileMenuOpen}
        >
            <Box sx={{
                paddingX: 2,
                paddingY: 1,
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={() => setIsMobileMenuOpen(false)}
                    color="inherit"
                >
                    <Icon icon="octicon:x-16"/>
                </IconButton>
            </Box>
            <MenuItem onClick={() => handleMenuItemClick('/app')}>
                <p>Kokpit</p>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/app/knowledgeBase')}>
                <p style={{
                    ...(isActive('app/knowledgeBase') && {fontWeight: 'bold'})
                }}>Baza pomocy i wiedzy</p>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/app/journal')}>
                <p style={{
                    ...(isActive('app/journal') && {fontWeight: 'bold'})
                }}>Dziennik</p>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/app/feeling-journal')}>
                <p style={{
                    ...(isActive('app/feeling-journal') && {fontWeight: 'bold'})
                }}>Dziennik samopoczucia</p>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/app/my-group')}>
                <p style={{
                    ...(isActive('app/my-group') && {fontWeight: 'bold'})
                }}>Moja grupa</p>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/app/my-plan')}>
                <p style={{
                    ...(isActive('app/my-plan') && {fontWeight: 'bold'})
                }}>Mój plan</p>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/app/stats')}>
                <p style={{
                    ...(isActive('app/stats') && {fontWeight: 'bold'})
                }}>Statystyki</p>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/app/consultation')}>
                <p style={{
                    ...(isActive('app/consultation') && {fontWeight: 'bold'})
                }}>Konsultacja</p>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/app/sos')} sx={{color: 'red'}}>
                <p style={{
                    ...(isActive('app/sos') && {fontWeight: 'bold'})
                }}>SOS!</p>
            </MenuItem>
        </Drawer>
    );

    return (<>
        <AppBar position="static" color={'transparent'}>
            <Toolbar>
                <Image alt="logo" src={'/logo.png'} width={75} height={75}/>
                <Box sx={{flexGrow: 1}}/>
                <Stack direction="row" sx={{display: {xs: 'none', md: 'flex'}}} spacing={2}>
                    <Button color="inherit" onClick={() => handleMenuItemClick('/app')}>Kokpit</Button>
                    <Button sx={{
                        ...(isActive('app/knowledgeBase') && {textDecoration: 'underline'})
                    }} color="inherit" onClick={() => handleMenuItemClick('/app/knowledgeBase')}>Baza pomocy i
                        wiedzy</Button>
                    <Button sx={{
                        ...(isActive('app/journal') && {textDecoration: 'underline'})
                    }} color="inherit" onClick={() => handleMenuItemClick('/app/journal')}>Dziennik</Button>
                    <Button sx={{
                        ...(isActive('app/feeling-journal') && {textDecoration: 'underline'})
                    }} color="inherit" onClick={() => handleMenuItemClick('/app/feeling-journal')}>Dziennik
                        samopoczucia</Button>
                    <Button sx={{
                        ...(isActive('app/my-group') && {textDecoration: 'underline'})
                    }} color="inherit" onClick={() => handleMenuItemClick('/app/my-group')}>Moja grupa</Button>
                    <Button sx={{
                        ...(isActive('app/my-plan') && {textDecoration: 'underline'})
                    }} color="inherit" onClick={() => handleMenuItemClick('/app/my-plan')}>Mój plan</Button>
                    <Button sx={{
                        ...(isActive('app/stats') && {textDecoration: 'underline'})
                    }} color="inherit" onClick={() => handleMenuItemClick('/app/stats')}>Statystyki</Button>
                    <Button sx={{
                        ...(isActive('app/consultation') && {textDecoration: 'underline'})
                    }} color="inherit" onClick={() => handleMenuItemClick('/app/consultation')}>Konsultacja</Button>
                    <Button sx={{
                        borderColor: 'red',
                        ...(isActive('app/sos') && {textDecoration: 'underline'})
                    }} color="inherit" variant="outlined"
                            onClick={() => handleMenuItemClick('/app/sos')}>SOS!</Button>
                </Stack>
                <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                    <IconButton
                        size="large"
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={() => setIsMobileMenuOpen(true)}
                        color="inherit"
                    >
                        <MenuIcon/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
        {renderMobileMenu}
    </>);
}