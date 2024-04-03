import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const EmailInput = () => {
  const [emailLabelShrink, setEmailLabelShrink] = useState(false);

  return (
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 60 }}>
        <AccountCircleIcon style={{ width:"50px", height:"50px", marginLeft: 10, marginRight: 10, color: '#f4f4f4' }} />
        <TextField
          label="Email"
          variant="outlined"
          InputProps={{
            style: {
              backgroundColor: '#f4f4f4',
              color: '#121212',
              borderRadius: 25,
              border: 'none',
              width: 400,
              height: 60,
              paddingLeft: 20,
              paddingRight: 20,
            },
          }}
          InputLabelProps={{
            shrink: emailLabelShrink,
          }}
          onFocus={() => setEmailLabelShrink(true)}
          onBlur={(e) => setEmailLabelShrink(!!e.target.value)}
          fullWidth
          autoComplete="off"
        />
    </div>
  );
};

export default EmailInput;
