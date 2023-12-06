import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

const CustomInput = ({
  label,
  name,
  onBlur,
  value,
  handleChange,
  error,
  touched,
  helperText,
  placeholder,
}) => {
   
  return (
    <div>
      <label htmlFor={name} style={{ fontSize: "14px" }}>
        {label}
      </label>
      <TextField
        placeholder={placeholder}
        sx={{
          width: "100%",
          paddingTop: "5px",
          input: {
            color: "#808080",
            fontWeight: "normal",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#808080",
            },
          },
        }}
        name={name}
        onBlur={onBlur}
        value={value}
        onChange={handleChange}
        error={error && touched}
        helperText={error && touched ? helperText : ""}
      />
    </div>
  );
};

export default CustomInput;
