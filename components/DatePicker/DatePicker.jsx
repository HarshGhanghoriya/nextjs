import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function DatePicker({
  onChange,
  name,
  value,
  label,
  sx,
  error,
  helperText

}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker sx={{ width: "100%", ...sx }} onChange={onChange} value={value} name={name} label={label} error={error} helperText={helperText}
  />
    </LocalizationProvider>
  );
}