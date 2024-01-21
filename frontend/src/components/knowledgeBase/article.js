import {Box, Typography, useTheme} from "@mui/material";
import * as React from "react";
import Image from 'next/image'

export default function Article({article, sx}) {
    const theme = useTheme();

    const {image, title, author} = article

    return (<Box sx={{
        backgroundColor: "#EFFDF3",
        borderRadius: '15px'
    }}>
        <Box sx={{
            position: 'relative',
            width: 's',
            height: '130px',
            ...sx
        }}>
            <Image src={`/articles/${image}`} alt={title} layout={'fill'} objectFit={'cover'}
                   style={{borderRadius: '15px 15px 0 0'}}/>
        </Box>
        <Box>
            <Typography sx={{color: '#00350D', fontFamily: 'Poppins', fontWeight: 'bold', p: 1, pb: 0}}>{title}</Typography>
            <Typography sx={{color: '#2B5B30', fontFamily: 'Poppins', p: 1, pt: 0}}>{author}</Typography>
        </Box>
    </Box>)
}