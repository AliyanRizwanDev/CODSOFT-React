import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Mohammad Aliyan!";
const bio1 = "A Full-Stack Developer";
const bio2 = "Specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <img src="https://i.ibb.co/qDmrBqZ/3776800c-a9cb-406e-a8b8-efa70fdbc9e3.png" alt="error"style={{borderRadius:"50%",width:"150px",height:"150px"}} />
    <p>{greeting}</p>
    <h1 style={{fontSize:"50px",fontWeight:"bold"}}>{bio1}</h1>
    <h1 style={{fontSize:"50px",fontWeight:"bold"}}>{bio2}</h1>
  </FullScreenSection>
);

export default LandingSection;
