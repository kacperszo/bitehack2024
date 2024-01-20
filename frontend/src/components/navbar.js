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
        <p>Baza pomocy i wiedzy</p>
      </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('/app/journal')}>
        <p>Dziennik</p>
      </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('/app/feeling-journal')}>
        <p>Dziennik samopoczucia</p>
      </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('/app/my-group')}>
        <p>Moja grupa</p>
      </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('/app/my-plan')}>
        <p>Mój plan</p>
      </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('/app/stats')}>
        <p>Statystyki</p>
      </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('/app/consultation')}>
        <p>Konsultacja</p>
      </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('/app/sos')} sx={{color: 'red'}}>
        <p>SOS!</p>
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
          <Button color="inherit" onClick={() => handleMenuItemClick('/app/knowledge-base')}>Baza pomocy i
            wiedzy</Button>
          <Button color="inherit" onClick={() => handleMenuItemClick('/app/journal')}>Dziennik</Button>
          <Button color="inherit" onClick={() => handleMenuItemClick('/app/feeling-journal')}>Dziennik
            samopoczucia</Button>
          <Button color="inherit" onClick={() => handleMenuItemClick('/app/my-group')}>Moja grupa</Button>
          <Button color="inherit" onClick={() => handleMenuItemClick('/app/my-plan')}>Mój plan</Button>
          <Button color="inherit" onClick={() => handleMenuItemClick('/app/stats')}>Statystyki</Button>
          <Button color="inherit" onClick={() => handleMenuItemClick('/app/consultation')}>Konsultacja</Button>
          <Button color="inherit" variant="outlined" sx={{borderColor: 'red'}}
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