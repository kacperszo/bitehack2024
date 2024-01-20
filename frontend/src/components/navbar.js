import {AppBar, Box, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {useRouter} from "next/router";
import {useState} from "react";

export default function Navbar() {
  const router = useRouter();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const handleMenuItemClick = (href) => {
    handleMobileMenuClose();
    router.push(href);
  }

  const isActive = (href) => {
    if (router.isReady) {
      return window.location.href.includes(href);
    }
    return false;
  }

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => handleMenuItemClick('/app/knowledge-base')}>
        <p style={{
          ...(isActive('app/knowledge-base') && {fontWeight: 'bold'})
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
    </Menu>
  );

  return (<>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap>
          odNowa
        </Typography>
        <Box sx={{flexGrow: 1}}/>
        <Stack direction="row" sx={{display: {xs: 'none', md: 'flex'}}} spacing={2}>
          <Button sx={{
            ...(isActive('app/knowledge-base') && {textDecoration: 'underline'})
          }} color="inherit" onClick={() => handleMenuItemClick('/app/knowledge-base')}>Baza pomocy i
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
            onClick={handleMobileMenuOpen}
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