import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function MModal({ open, title, children, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontWeight: 600, fontSize: "18px" }}>{title}</span>

        <IconButton onClick={onClose}>
          <CloseIcon sx={{ color: "error.main", fontSize: 28 }} />
        </IconButton>
      </DialogTitle>

      <Divider />

      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
