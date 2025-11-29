import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { STATUS } from "../../utils/constants";

export default function DealerFilter({ value, onChange }) {
  return (
    <FormControl size="small" sx={{ minWidth: 140 }}>
      <InputLabel>Status</InputLabel>
      <Select value={value} label="Status" onChange={onChange}>
        <MenuItem value="">All</MenuItem>
        <MenuItem value={STATUS.ACTIVE}>{STATUS.ACTIVE}</MenuItem>
        <MenuItem value={STATUS.INACTIVE}>{STATUS.INACTIVE}</MenuItem>
      </Select>
    </FormControl>
  );
}
