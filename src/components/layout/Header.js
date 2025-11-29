import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useLocation } from "react-router-dom";
export default function Header({ onToggleSidebar }) {
  const location = useLocation();
  const getPageName = () => {
    const path = location.pathname;
    if (path === "/new-dealer") return "Add Dealer";
    if (path.startsWith("/dealer/")) return "Dealer Profile";

    return "Dashboard";
  };

  const pageName = getPageName();

  const navItems = [
    { label: "Dashboard", path: "/" },
    { label: "Add Dealer", path: "/new-dealer" },
  ];

  return (
    <AppBar position="sticky" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton color="inherit" onClick={onToggleSidebar}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ opacity: 0.7 }}>
            |
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            App / {pageName}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                style={{ textDecoration: "none" }}
              >
                <Button
                  color="inherit"
                  sx={{
                    fontWeight: 500,
                    borderBottom: isActive ? "3px solid #fff" : "none",
                    borderRadius: 0,
                  }}
                >
                  {item.label}
                </Button>
              </NavLink>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
