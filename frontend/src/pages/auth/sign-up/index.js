import AreYouFromClinicForm from "@/components/signup/AreYouFromClinicForm";
import "@/styles/pages/auth/sign-up.module.scss";
import {Box, Button, Stack, Typography, useTheme} from "@mui/material";
import {useEffect, useState} from "react";
import ClinicCodeForm from "@/components/signup/ClinicCodeForm";
import IsItYourProblemForm from "@/components/signup/IsItYourProblemForm";
import WhatAreYourAddictionForm from "@/components/signup/WhatAreYourAddictionForm";
import GenerateYourNicknameForm from "@/components/signup/GenerateYourNicknameForm";
import Image from "next/image";

export default function SignUp() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isFromClinic, setIsFromClinic] = useState(false);
    const [isItYourProblem, setIsItYourProblem] = useState(true);
    const [addictions, setAddictions] = useState([]);
    const [clinicCode, setClinicCode] = useState("");
    const onNext = () => {
        setCurrentStep(step => step + 1);
    }
    const onPrev = () => {
        setCurrentStep(step => step - 1);
    }

    const theme = useTheme();
    useEffect(() => {
        if (document?.body) {
            document.body.style.backgroundColor = theme.palette.primary.light;
        }
    }, [theme]);
    return (
        <>
            <Stack sx={{
                backgroundColor: theme.palette.primary.light,
                width: "100vw",
                overflow: "hidden"
            }}>
                <Image sx={{marginBottom: 20}} src={"/logo.png"} alt={"logo"} width={50} height={50}/>
            </Stack>
            <Box sx={{
                width: "100vw",
                minHeight: "90vh",
                height: "100%",
                overflowX: "hidden",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                alignContent: "center",
                flexDirection: "column"
            }}>
                <Box sx={{
                    paddingTop: 3,
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingBottom: 3,
                    borderRadius: 2,
                    width: "100%",
                    maxWidth: "30rem",
                    display: "flex",
                    flexDirection: "column"
                }}>
                    {/*forms body*/}
                    <Box sx={{height: "100%", position: "relative"}}>
                        {currentStep === 0 && (
                            <AreYouFromClinicForm value={isFromClinic} setValue={(v) => setIsFromClinic(v)}/>)}
                        {currentStep === 1 && isFromClinic && (
                            <ClinicCodeForm value={clinicCode} setValue={(v) => setClinicCode(v)}/>)}
                        {currentStep === 1 && !isFromClinic && (
                            <IsItYourProblemForm value={isItYourProblem} setValue={(v) => setIsItYourProblem(v)}/>)}
                        {currentStep === 2 && !isFromClinic && (
                            <WhatAreYourAddictionForm value={addictions} setValue={(v) => setAddictions(v)}/>)}
                        {currentStep === 3 && !isFromClinic && (
                            <GenerateYourNicknameForm value={addictions} setValue={(v) => setAddictions(v)}/>)}
                    </Box>
                </Box>
                <Stack direction={"column"}>
                    <Button sx={{
                        marginTop: 3,
                        backgroundColor: theme.palette.primary.dark,
                        width: "12rem",
                    }} onClick={onNext} variant={"contained"}>Dalej</Button>
                    <Button sx={{
                        marginTop: 3,
                        color: theme.palette.primary.dark,
                        borderColor: theme.palette.primary.dark,
                        width: "12rem",
                    }} disabled={currentStep === 0} onClick={onPrev}

                            variant={"text"}>Wstecz</Button>
                </Stack>
            </Box>
        </>
    )
}
