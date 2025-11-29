
import React from "react";
import TextField from "@mui/material/TextField";

export default function MInput({ name, label, error, ...props }) {
  return <TextField fullWidth label={label} name={name} error={!!error} helperText={error?.message} {...props} />;
}
