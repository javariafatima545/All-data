import { InputAdornment, Stack, TextField } from "@mui/material";
import React from "react";

function Int() {
  return (
    <>
      <TextField label="name" variant="outlined" />
      <TextField label="password" variant="outlined"/>
      <TextField label="name" variant="filled" />

      <TextField label="name" variant="standard" />
      <TextField label="small secondary" size="small" color="secondary" />
      <TextField
        label="form input"
        helpertext="do not show  your password with anyone"
        required
      />
      <TextField
        label=" password"
        type="password"
        helperText="do not show y password"
        disabled
      />
      <TextField label="read only" inputProps={{ readonly: true }} />
      <Stack>
        <TextField
          label="amount"
          //  lable="amount"
          InputProps={{
            startAdornment: <InputAdornment postion="start">$</InputAdornment>,
          }}
        />

        <TextField
          label="weight"
          InputProps={{
            startAdornment: <InputAdornment postion="start">kg</InputAdornment>,
          }}
        />
      </Stack>
    </>
  );
}

export default Int;
