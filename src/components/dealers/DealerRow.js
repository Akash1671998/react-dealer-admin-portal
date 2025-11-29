import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Tooltip from "@mui/material/Tooltip";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton } from "@mui/material";

export default function DealerRow({ dealer, onView, onEdit }) {
  const isActive = dealer.status === "Active";
  const lightBold = { fontWeight: 500 };

  return (
    <TableRow hover>
      <TableCell sx={lightBold}>{dealer.name}</TableCell>
      <TableCell sx={lightBold}>{dealer.location}</TableCell>
      <TableCell sx={lightBold}>{dealer.contact}</TableCell>
      <TableCell sx={lightBold}>
        <Tooltip title={dealer.status}>
          <FiberManualRecordIcon
            sx={{
              fontSize: 30,
              color: isActive ? "success.main" : "error.main",
              cursor: "pointer",
            }}
          />
        </Tooltip>
      </TableCell>
      <TableCell sx={lightBold}>
        <Tooltip title="View Dealer">
          <IconButton
            size="large"
            color="primary"
            onClick={() => onView(dealer)}
          >
            <RemoveRedEyeIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Edit Dealer">
          <IconButton
            size="large"
            color="secondary"
            sx={{ ml: 1 }}
            onClick={() => onEdit(dealer)}
          >
            <EditNoteIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
}
