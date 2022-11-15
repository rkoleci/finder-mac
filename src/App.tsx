
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import MainLayout from "./containers/MainLayout";

function App() {
  return (
    <ChakraProvider>
     <MainLayout />
    </ChakraProvider>
  );
}

export default App;
