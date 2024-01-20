import {Avatar, Badge, badgeClasses, Box, Typography} from "@mui/material";
import * as React from "react";

export default function UserTile({user}) {
    const {id, displayName, type, color} = user

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100px',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 1
        }}>
            <Box sx={{
                position: 'relative',
            }}>
                <Badge
                    anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                    badgeInset="14%"
                    color="success"
                    sx={{
                        [`& .${badgeClasses.badge}`]: {
                            '&::after': {
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                animation: 'ripple 1.2s infinite ease-in-out',
                                border: '2px solid',
                                borderColor: 'success.500',
                                content: '""',
                            },
                        },
                        '@keyframes ripple': {
                            '0%': {
                                transform: 'scale(1)',
                                opacity: 1,
                            },
                            '100%': {
                                transform: 'scale(2)',
                                opacity: 0,
                            },
                        },
                    }}
                >
                    <Avatar sx={{ bgcolor: color }}>
                        {displayName.split(' ')[0][0]}
                    </Avatar>
                </Badge>
            </Box>
            <Typography paragraph={true} sx={{ textAlign: 'center', marginBottom: '0px' }}>{displayName}</Typography>
        </Box>
    )
}