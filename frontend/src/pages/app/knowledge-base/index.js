import {Box, Grid, Stack, Tab, Tabs, Typography} from "@mui/material";
import Navbar from "@/components/navbar";
import KnowledgeTab from "@/components/knowledgeBase/knowledgeTab";
import {useState} from "react";

export default function KnowledgeBasePage() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Navbar/>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Item One" id={`simple-tab-${0}`}/>
                        <Tab label="Item Two" id={`simple-tab-${1}`}/>
                        <Tab label="Item Three" id={`simple-tab-${2}`}/>
                    </Tabs>
                </Box>
                <KnowledgeTab value={value} index={0}>
                    item one
                </KnowledgeTab>
                <KnowledgeTab value={value} index={1}>
                    item one
                </KnowledgeTab>
                <KnowledgeTab value={value} index={2}>
                    item one
                </KnowledgeTab>
            </Box>
        </>
    );
}