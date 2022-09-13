import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { green, purple } from "@mui/material/colors";
import { AccountBalanceWalletOutlined } from "@mui/icons-material";

const ColorButtonPurple = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
    color: "#000",
  },
}));
const ColorButtonGreen = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: green[500],
  color: "#fff",
  "&:hover": {
    backgroundColor: green[700],
    color: "#000",
  },
}));
export default function ColouredButton(props) {
  if (props.index == 1) {
    return (
      <ColorButtonPurple variant="contained">
        <AccountBalanceWalletOutlined
          sx={{
            marginRight: "5px",
          }}
        />
        {props.txt}
      </ColorButtonPurple>
    );
  } else if (props.index == 2) {
    return (
      <ColorButtonGreen variant="contained">
        <AccountBalanceWalletOutlined
          sx={{
            marginRight: "5px",
          }}
        />
        {props.txt}
      </ColorButtonGreen>
    );
  }
}
