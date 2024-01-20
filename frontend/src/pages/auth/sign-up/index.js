import AreYouFromClinicForm from "@/components/signup/AreYouFromClinicForm";
import "@/styles/pages/auth/sign-up.module.scss";
import {Box, Button, Typography} from "@mui/material";
import {useState} from "react";
import ClinicCodeForm from "@/components/signup/ClinicCodeForm";
import IsItYourProblemForm from "@/components/signup/IsItYourProblemForm";
import WhatAreYourAddictionForm from "@/components/signup/WhatAreYourAddictionForm";
import GenerateYourNicknameForm from "@/components/signup/GenerateYourNicknameForm";

export default function SignUp() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isFromClinic, setIsFromClinic] = useState(false);
    const [isItYourProblem, setIsItYourProblem] = useState(true);
    const [addictions, setAddictions] = useState([]);
    const [clinicCode, setClinicCode] = useState("");
    const onNext = () => {
        setCurrentStep(step => step + 1);
        console.log(isFromClinic, currentStep)
    }
    const onPrev = () => {
        setCurrentStep(step => step - 1);
    }
    return (
        <Box sx={{
            width: "100vw",
            height: "100vh",
            overflowX: "hidden",
            backgroundColor: "#86E9B1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Box sx={{
                paddingTop: 3,
                paddingLeft: 5,
                paddingRight: 5,
                paddingBottom: 3,
                borderRadius: 2,
                width: "100%",
                maxWidth: "20rem",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column"
            }}>
                <Typography variant={"h6"}>Opowiedz nam o sobie</Typography>
                {/*forms body*/}
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
                <Box sx={{display: "flex"}}>
                    <Button sx={{marginTop: 3}} disabled={currentStep === 0} onClick={onPrev}
                            variant={"outlined"}>Wstecz</Button>
                    <Button sx={{marginTop: 3, marginLeft: 1}} onClick={onNext} variant={"outlined"}>Dalej</Button>
                </Box>
            </Box>
        </Box>
    )
}