import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import LockIcon from "@mui/icons-material/Lock";

const PasswordInput = () => {
  const [passwordLabelShrink, setPasswordLabelShrink] = useState(false);

  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: 60 }}>
      <LockIcon
        style={{
          width: "50px",
          height: "50px",
          marginLeft: 10,
          marginRight: 10,
          color: "#f4f4f4",
        }}
      />
      <TextField
        label="Senha"
        variant="outlined"
        type="password"
        InputProps={{
          style: {
            backgroundColor: "#f4f4f4",
            color: "#121212",
            borderRadius: 25,
            border: "none",
            width: 400,
            height: 60,
            paddingLeft: 20,
            paddingRight: 20,
          },
        }}
        InputLabelProps={{
          shrink: passwordLabelShrink,
        }}
        onFocus={() => setPasswordLabelShrink(true)}
        onBlur={(e) => setPasswordLabelShrink(!!e.target.value)}
        fullWidth
        autoComplete="off"
      />
    </div>
  );
};

export default PasswordInput;
