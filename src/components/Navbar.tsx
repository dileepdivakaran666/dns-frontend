import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// Styled components
const NavContainer = styled(AppBar)({
  backgroundColor: "black",
  padding: "10px 0",
});

const Logo = styled("img")({
  width: 150,
  height: "auto",
});

const NavItems = styled(Box)(({ theme }) => ({
  display: "flex",
  marginLeft: "auto",
  gap: "20px",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
  alignItems: "center", // Align items vertically
  [theme.breakpoints.down("sm")]: {
    display: "none", // Hide NavItems on mobile
  },
}));

const MobileMenu = styled(Box)(({ theme }) => ({
  display: "none",
  marginLeft: "auto",
  [theme.breakpoints.down("sm")]: {
    display: "block", // Show hamburger menu on mobile
  },
}));

// Navbar component
export default function Navbar() {
  const { isLoggedIn, handleLogout } = useAuth();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const navigate = useNavigate()
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const navItems = [
    { text: "HOME", link: "/" },
    { text: "MENU", link: "/menu" },
    { text: "MAKE A RESERVATION", link: "/reservation" },
    { text: "CONTACT US", link: "/contact" },
  ];

  return (
    <NavContainer position="static">
      <Toolbar sx={{ display: "flex", alignItems: "center", height: 60 }}>
        {/* Logo */}
        <Box
          sx={{
            position: "absolute",
            width: 150,
            marginLeft: 10,
            top: "100%",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        >
          <Logo
            src={
              "https://s3-alpha-sig.figma.com/img/22e3/1e48/6860545013e0a63ba8cb7e94004971f7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QCsmYtO7FJDNfiBS-TsDQig7Tnc0WXc9MtxuWSPwv4b-COWgtD13hXo8g~TBsRsI2XiRlDeIxqsHL6Ni1gL~Xnj8InLq5Xp5hm87GQAiAUso45qH7XEgGqGtwt4a8bLDDgoxkmJrQ2YH2SYFcUEEzPGrlcgY1pNfcwCLuuntu8VnYhc0Tu-elx2DRCixdQs8R8KGH85zM-xqrxSHf~vMx1hgV8pGPzBv1kXSaEBOgBJJ7S33~1PupW3bzMwhBeptRLBQhcy49AWnDFOOHjG2lVqMBvIrWd0LSCYwQAPWCvdmnGAcbnPySjtkYvi35wWbxvLXpSued2zcS1M~HKpT6A__"
            }
            alt="Logo"
            sx={{ flexGrow: 1, height: 60 }}
          />
        </Box>

        {/* Desktop Nav Items */}
        <NavItems>
          {navItems.map((item) => (
            <Box key={item.text}>{item.text}</Box>
          ))}
          {/* Conditionally render Login/Signup or Logout based on isLoggedIn */}
          {isLoggedIn ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">Login</Button>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </>
          )}
        </NavItems>

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <MobileMenu>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </MobileMenu>
        )}

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {navItems.map((item) => (
                <ListItem component="button" key={item.text} onClick={() => console.log(item.text)}>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
              {/* Conditionally render Login/Signup or Logout based on isLoggedIn */}
              {isLoggedIn ? (
                <ListItem component="button" onClick={handleLogout}>
                  <ListItemText primary="Logout" />
                </ListItem>
              ) : (
                <>
                  <ListItem component={Link} to="/login">
                  <ListItemText primary="Login" />
                </ListItem>
                <ListItem component={Link} to="/signup">
                  <ListItemText primary="Signup" />
                </ListItem>
                </>
              )}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </NavContainer>
  );
}