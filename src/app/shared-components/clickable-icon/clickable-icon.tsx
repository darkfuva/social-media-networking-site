import React from "react";
import { JsxElement } from "typescript";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import styles from "./clickable-icon.module.css";
import { Typography } from "@mui/material";

interface ClickableIconProps {
  Icon: typeof ThumbUpIcon;
  action: () => void;
  showNumber: boolean;
  text: number | string | undefined;
  classes?: string | "";
}

export default function ClickableIcon({
  Icon,
  action,
  showNumber,
  text,
  classes = "",
}: ClickableIconProps) {
  const executeAction = () => {
    console.log("execute action clicked");
    action();
  };
  return (
    <div
      onClick={executeAction}
      className={`tertiaryColorHover ${classes} ${styles.clickableIconContainer}`}
    >
      {showNumber ? (
        <Typography color="text.secondary">
          {text}
        </Typography>
      ) : (
        <></>
      )}
      <Icon sx={{fontSize: classes.includes("xsFontSize")? "1rem":"1.5rem"}}></Icon>
    </div>
  );
}
