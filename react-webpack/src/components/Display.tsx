import React from "react";
import TextField from "@material-ui/core/TextField";

interface IProps {
  valueArray: any[];
}

const Display = (props: IProps) => {
  const value = props.valueArray.join("");

  return (
    <TextField
      margin="normal"
      value={value}
      InputProps={{
        readOnly: true
      }}
    />
  );
};

export default Display;
