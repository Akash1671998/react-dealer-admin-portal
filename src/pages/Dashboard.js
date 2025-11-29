import React from "react";
import { useDealerState, useDealerDispatch } from "../contexts/DealerContext";
import DealerTable from "../components/dealers/DealerTable";
import {Box} from "@mui/material";

export default function Dashboard() {
  const { dealers } = useDealerState();
  const dispatch = useDealerDispatch();

  return (
    <Box sx={{ width: "100%" }}>
      <DealerTable dealers={dealers} dispatch={dispatch} />
    </Box>
  );
}
