import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab, Button } from "@mui/material";
import { NavbarWrapper } from "../styles/Header.modules";

const menuItems = [
  { name: "Home" },
  { name: "Now Playing" },
  { name: "Popular" },
  { name: "TV Shows" },
];

const Header = () => {
  return (
    <NavbarWrapper>
      <AppBar>
        <Toolbar>
          <Typography>Cinematique</Typography>
          <div>
            {menuItems.map((nav, index) => (
              <Tab label={nav.name} key={index} />
            ))}
          </div>
          <Button variant="contained" color="info">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </NavbarWrapper>
  );
};

export default Header;
