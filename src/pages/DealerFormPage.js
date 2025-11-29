import React from "react";
import { useDealerDispatch } from "../contexts/DealerContext";
import { dealerSchema } from "../utils/validation";
import useFormValidation from "../hooks/useFormValidation";
import { useNavigate } from "react-router-dom";
import { generateId } from "../utils/format";
import {
  Box,
  Stack,
  TextField,
  Button,
  MenuItem,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { STATUS } from "../utils/constants";
import { Controller } from "react-hook-form";

export default function DealerFormPage() {
  const dispatch = useDealerDispatch();
  const navigate = useNavigate();

  const { control, handleSubmit, reset } = useFormValidation(dealerSchema, {
    defaultValues: { status: STATUS.ACTIVE },
  });

  function onSubmit(data) {
    const payload = { id: generateId(), ...data };
    dispatch({ type: "ADD_DEALER", payload });
    navigate(`/dealer/${payload.id}`);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
        px: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 650,
          borderRadius: 3,
          boxShadow: 4,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 3,
              textAlign: "center",
            }}
          >
            Add Dealer
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    label="Dealer Name"
                    {...field}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    fullWidth
                  />
                )}
              />

              <Controller
                name="address"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    label="Address"
                    multiline
                    rows={3}
                    {...field}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    fullWidth
                  />
                )}
              />

              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    label="Email"
                    {...field}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    fullWidth
                  />
                )}
              />

              <Controller
                name="contact"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    label="Phone"
                    {...field}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    fullWidth
                  />
                )}
              />

              <Controller
                name="operatingHours"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    label="Operating Hours"
                    {...field}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    fullWidth
                  />
                )}
              />

              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <TextField label="Status" select {...field} fullWidth>
                    <MenuItem value={STATUS.ACTIVE}>{STATUS.ACTIVE}</MenuItem>
                    <MenuItem value={STATUS.INACTIVE}>{STATUS.INACTIVE}</MenuItem>
                  </TextField>
                )}
              />

              <Stack direction="row" spacing={2} justifyContent="space-between">
                <Button type="submit" variant="contained" fullWidth>
                  Save & Preview
                </Button>

                <Button
                  type="button"
                  variant="outlined"
                  fullWidth
                  onClick={() => reset()}
                >
                  Reset
                </Button>
              </Stack>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
