
import React from "react";
import TextField from "@mui/material/TextField";

export default function MSelect({ label, selectProps, children, ...props }) {
  return (
    <TextField select fullWidth label={label} SelectProps={{ native: true, ...selectProps }} {...props}>
      {children}
    </TextField>
  );
}
