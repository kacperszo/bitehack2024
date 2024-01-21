import {AppBar, Box, Drawer, IconButton, MenuItem, Toolbar, useTheme} from "@mui/material";
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
    {path: "/knowledge-base", label: "Baza pomocy i wiedzy", icon: "Book.svg"},
    {path: "/journal", label: "Dziennik", icon: "Calendar.svg"},
    {path: "/feeling-journal", label: "Dziennik samopoczucia", icon: "Notebook.svg"},
    {path: "/my-group", label: "Moja grupa", icon: "Direct Hit.svg"},
    {path: "/consultation", label: "Konsultacja", icon: "Camera.svg"},
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
      {menuItems.map((item, index) => {
        const {path, label, icon} = item
        return (
          <MenuItem key={index} sx={{fontFamily: 'Poppins'}}
                    onClick={() => handleMenuItemClick(`/app${path}`)}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              fontSize: 20,
              textWrap: 'wrap'
            }}>
              <Image alt={label} src={`/icons/${icon}`} width={36} height={36}/>
              <p style={{...(isActive(`app${path}`) && {fontWeight: 'bold'})}}>{label}</p>
            </Box>
          </MenuItem>
        )
      })}
    </Drawer>
  );

  return (<>
    <AppBar position="static" color={"transparent"} sx={{display: {xs: 'flex', lg: 'none'}, boxShadow: 'none'}}>
      <Toolbar>
        <Image alt="logo" src={'/logo.png'} width={75} height={75}/>
        <Box sx={{flexGrow: 1}}/>
        <Box>
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