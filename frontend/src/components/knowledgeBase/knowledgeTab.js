import {Avatar, Badge, badgeClasses, Box, Typography} from "@mui/material";
import * as React from "react";

export default function KnowledgeTab({children, value, index, ...other}) {

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index ? (
                {children}
            ) : null}
        </div>
    )
}