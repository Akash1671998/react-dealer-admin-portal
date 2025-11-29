
import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function DealerSearch({ value, onChange, placeholder = "Search by name or location" }) {
  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 2 }}>
      <TextField fullWidth placeholder={placeholder} defaultValue={value} onChange={onChange} size="small" />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
