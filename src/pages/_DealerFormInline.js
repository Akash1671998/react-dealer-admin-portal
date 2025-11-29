
import React from "react";
import { Box, Stack, TextField, Button, MenuItem } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { STATUS } from "../utils/constants";

export default function DealerFormInline({ dealer, dispatch, onClose }) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: dealer.name,
      address: dealer.address,
      email: dealer.email,
      contact: dealer.contact,
      operatingHours: dealer.operatingHours,
      status: dealer.status,
    },
  });

  function onSubmit(values) {
    dispatch({ type: "UPDATE_DEALER", payload: { ...values, id: dealer.id } });
    onClose();
  }

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        
        <Controller
          name="name"
          control={control}
          render={({ field }) => <TextField label="Dealer Name" fullWidth {...field} />}
        />

        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField label="Address" fullWidth multiline rows={2} {...field} />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => <TextField label="Email" fullWidth {...field} />}
        />

        <Controller
          name="contact"
          control={control}
          render={({ field }) => <TextField label="Contact" fullWidth {...field} />}
        />

        <Controller
          name="operatingHours"
          control={control}
          render={({ field }) => <TextField label="Operating Hours" fullWidth {...field} />}
        />

        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <TextField label="Status" select fullWidth {...field}>
              <MenuItem value={STATUS.ACTIVE}>{STATUS.ACTIVE}</MenuItem>
              <MenuItem value={STATUS.INACTIVE}>{STATUS.INACTIVE}</MenuItem>
            </TextField>
          )}
        />

        <Button type="submit" variant="contained">
          Update Dealer
        </Button>
      </Stack>
    </Box>
  );
}
