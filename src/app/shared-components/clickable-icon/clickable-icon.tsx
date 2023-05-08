import React  from "react";
import { JsxElement } from "typescript";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import styles from "./clickable-icon.module.css"
import { Typography } from "@mui/material";

interface ClickableIconProps{
    Icon:typeof ThumbUpIcon, action: () => void, showNumber: boolean, text: number|string|undefined
}

export default function ClickableIcon({Icon, action, showNumber, text}: ClickableIconProps){

    const executeAction = () =>{
        console.log("execute action clicked");
        action();
    }
    return (
        <div onClick={executeAction} className={`tertiaryColorHover ${styles.clickableIconContainer}`}>
            {showNumber? 
            
            <Typography sx={{fontSize:12}} color="text.secondary">
            {text}
        </Typography>
        : <></>}
            <Icon></Icon>
        </div>
        
    )
}