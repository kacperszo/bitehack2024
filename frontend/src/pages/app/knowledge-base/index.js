import {Box, Grid, Stack, Tab, Tabs, Typography, useTheme} from "@mui/material";
import Navbar from "@/components/navbar";
import KnowledgeTab from "@/components/knowledgeBase/knowledgeTab";
import {useState} from "react";
import * as React from "react";
import Layout from "@/components/layout";

export default function KnowledgeBasePage() {
    const theme = useTheme();

    return (
        <>
            <Hero>
                <Typography sx={{marginTop: "1rem", display: "block"}} color={theme.palette.primary.dark}
                            variant={"h3"}>Zmień
                    swoje życie i</Typography>
                <Typography sx={{marginTop: "1rem", display: "block"}} color={theme.palette.primary.dark}
                            variant={"h5"}>zacznij
                    żyć odNowa</Typography>
            </Hero>

        </>
    )
}

const Hero = ({children}) => {
    return (
        <Layout>
            <Navbar/>
            <Box sx={{
                pt: 10,
                pb: 10,
                display: "flex",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {children}
            </Box>
        </Layout>
    )
}