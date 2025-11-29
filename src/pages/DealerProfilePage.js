
import React from "react";
import { useParams } from "react-router-dom";
import { useDealerState } from "../contexts/DealerContext";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function DealerProfilePage() {
  const { id } = useParams();
  const { dealers } = useDealerState();

  const dealer = dealers.find((d) => d.id === id);

  if (!dealer) return <div>Dealer not found</div>;

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {dealer.name}
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <Typography><strong>Location:</strong> {dealer.location}</Typography>
          <Typography><strong>Contact:</strong> {dealer.contact}</Typography>
          <Typography><strong>Email:</strong> {dealer.email}</Typography>
          <Typography><strong>Address:</strong> {dealer.address}</Typography>
          <Typography><strong>Operating Hours:</strong> {dealer.operatingHours}</Typography>
          <Typography><strong>Status:</strong> {dealer.status}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
