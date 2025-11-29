import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

export default function Sidebar({ open }) {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", path: "/" },
    { label: "Add Dealer", path: "/new-dealer" },
  ];

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: open ? 220 : 60,
        transition: "width 0.3s ease",
        "& .MuiDrawer-paper": {
          width: open ? 220 : 60,
          position: "relative",
          transition: "width 0.3s ease",
          overflowX: "hidden",
        },
      }}
    >
      <Box sx={{ mt: 2 }}>
        <List>

          <Divider sx={{ mb: 1 }} />

          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemButton selected={isActive}>
                  <ListItemText
                    primary={open ? item.label : ""}
                    primaryTypographyProps={{ fontWeight: isActive ? 600 : 400 }}
                  />
                </ListItemButton>
              </NavLink>
            );
          })}

          <Divider sx={{ mt: 1 }} />

        </List>
      </Box>
    </Drawer>
  );
}
