
import React, { useMemo, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  Box,
  Stack,
  IconButton,
  Tooltip,
  Divider,
} from "@mui/material";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import AddIcon from "@mui/icons-material/Add";

import { useNavigate } from "react-router-dom";

import DealerRow from "./DealerRow";
import DealerSearch from "./DealerSearch";
import DealerFilter from "./DealerFilter";
import DealerPagination from "./DealerPagination";

import useSearch from "../../hooks/useSearch";
import usePagination from "../../hooks/usePagination";

import MModal from "../ui/MModal";
import DealerFormInline from "../../pages/_DealerFormInline";

export default function DealerTable({ dealers, dispatch }) {
  const [statusFilter, setStatusFilter] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [selected, setSelected] = useState(null);
  const [modalMode, setModalMode] = useState(null);

  const navigate = useNavigate();

// FILTER + SEARCH + SORT
  const filteredByStatus = useMemo(
    () => (statusFilter ? dealers.filter((d) => d.status === statusFilter) : dealers),
    [dealers, statusFilter]
  );

  const { results, query, onChange } = useSearch(filteredByStatus, ["name", "location"]);

  const sorted = useMemo(() => {
    const arr = [...results];
    arr.sort((a, b) => a.name.localeCompare(b.name) * (sortAsc ? 1 : -1));
    return arr;
  }, [results, sortAsc]);

  const { currentData, page, pageCount, goToPage } = usePagination({
        data: sorted,
        pageSize: 10,
  });
  return (
    <Box sx={{ mt: 3 }}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          mb: 2,
          p: 1,
        }}
      >
        <DealerSearch value={query} onChange={onChange} />
        <Stack direction="row" spacing={2} alignItems="center">
          <Tooltip title="Add Dealer">
            <IconButton
              color="error"
              onClick={() => navigate("/new-dealer")}
              sx={{
                border: "1px solid #f44336",
                width: 38,
                height: 38,
              }}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
          <DealerFilter
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          />
          <IconButton onClick={() => setSortAsc((s) => !s)} title="Sort by name">
            <SortByAlphaIcon color="success"/>
          </IconButton>
        </Stack>
      </Stack>
      <Divider sx={{ mb: 2 }} />
      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          borderRadius: 2,
          border: "1px solid rgba(0,0,0,0.3)",
        }}
      >
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Dealer Name</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Location</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Contact</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {currentData.map((d) => (
              <DealerRow
                key={d.id}
                dealer={d}
                onView={(x) => {
                  setSelected(x);
                  setModalMode("view");
                }}
                onEdit={(x) => {
                  setSelected(x);
                  setModalMode("edit");
                }}
              />
            ))}

            {currentData.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No dealers found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <DealerPagination page={page} count={pageCount} onChange={goToPage} />
      <MModal
        open={!!modalMode}
        title={modalMode === "view" ? "Dealer Details" : "Edit Dealer"}
        onClose={() => setModalMode(null)}
      >
       {modalMode === "view" && selected && (
  <Box
    sx={{
      width: "100%",
      border: "1px solid rgba(0,0,0,0.2)",
      borderRadius: 2,
      overflow: "hidden",
    }}
  >
    <Table size="small">
      <TableBody>

        <TableRow>
          <TableCell sx={{ fontWeight: 600 }}>Dealer Name</TableCell>
          <TableCell>{selected.name}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell sx={{ fontWeight: 600 }}>Address</TableCell>
          <TableCell>{selected.address}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
          <TableCell>{selected.email}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell sx={{ fontWeight: 600 }}>Contact</TableCell>
          <TableCell>{selected.contact}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell sx={{ fontWeight: 600 }}>Operating Hours</TableCell>
          <TableCell>{selected.operatingHours}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
          <TableCell>{selected.status}</TableCell>
        </TableRow>

      </TableBody>
    </Table>
  </Box>
)}

        {modalMode === "edit" && selected && (
          <DealerFormInline
            dealer={selected}
            onClose={() => setModalMode(null)}
            dispatch={dispatch}
          />
        )}
      </MModal>
    </Box>
  );
}
