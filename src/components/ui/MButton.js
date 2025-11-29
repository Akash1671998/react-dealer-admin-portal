
import React from "react";
import Button from "@mui/material/Button";

export default function MButton({ children, ...props }) {
  return (
    <Button variant="contained" size="small" {...props}>
      {children}
    </Button>
  );
}
