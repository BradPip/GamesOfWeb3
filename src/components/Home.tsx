import { Box, DarkMode, Text } from "@chakra-ui/react";
import CardToAdd from "./CardToAdd";
import Hero from "./Hero";

export default function Home({onClickSignIn}: { onClickSignIn: Function }) {


    return (
        <DarkMode>
        <>        
        <Hero onClickSignIn={()=>onClickSignIn()}/>
        </>
        </DarkMode>
);
}