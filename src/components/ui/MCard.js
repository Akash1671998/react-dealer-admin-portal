
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MCard({ title, children }) {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      {title && (
        <CardContent>
          <Typography variant="h6">{title}</Typography>
        </CardContent>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
}
