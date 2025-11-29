import React from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

export default function DealerPagination({ page, count, onChange }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
      <Pagination page={page} count={count} onChange={(e, p) => onChange(p)} color="primary" />
    </Box>
  );
}
