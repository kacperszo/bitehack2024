import Image from "next/image";
import {Inter} from "next/font/google";
import {Button} from "@mui/material";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <>
            <Button variant="outlined">Hello world</Button>
        </>
    );
}
