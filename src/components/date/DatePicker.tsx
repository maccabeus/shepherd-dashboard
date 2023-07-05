import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function AppDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label="Basic date picker"
        slotProps={{ textField: { size: 'small'} }}
      />
    </LocalizationProvider>
  );
}