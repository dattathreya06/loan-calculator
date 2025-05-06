import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Switch,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { themeMode, toggleTheme } = useAppContext();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "EXCHANGE RATES (LIVE)", path: "/exchange-rates" },
    { label: "ABOUT", path: "/about" },
    { label: "ERROR PAGE", path: "/error" },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <List>
        {navLinks.map((link) => (
          <ListItem
            button
            key={link.path}
            component={Link}
            to={link.path}
            selected={location.pathname === link.path}
          >
            <ListItemText
              primary={link.label}
              primaryTypographyProps={{
                fontWeight: location.pathname === link.path ? "bold" : "normal",
                color: location.pathname === link.path ? "primary" : "inherit",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* LEFT: Menu icon always on the left */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6">Loan Calculator</Typography>
          </Box>

          {/* RIGHT: nav links or nothing on mobile */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 1 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.path}
                    component={Link}
                    to={link.path}
                    sx={{
                      fontWeight:
                        location.pathname === link.path ? "bold" : "normal",
                      borderBottom:
                        location.pathname === link.path
                          ? "2px solid white"
                          : "none",
                      color:
                        location.pathname === link.path
                          ? "secondary.main"
                          : "inherit",
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            )}
            <Switch checked={themeMode === "dark"} onChange={toggleTheme} />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
