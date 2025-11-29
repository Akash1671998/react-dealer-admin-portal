import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";

export default function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header onToggleSidebar={() => setIsSidebarOpen((s) => !s)} />
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Sidebar open={isSidebarOpen} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            transition: "margin 0.3s ease",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
