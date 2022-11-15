import { Box, Flex, VStack } from "@chakra-ui/react";
import Menu from "components/Menu";
import WindowControls from "components/WindowControls";
import React, { useState } from "react";

export default function SideBar() {
  const [active, setActive] = useState<string>('Applications'); 
    
  return (
    <Flex
      direction="column"
      gap="2"
      bg="#E2E3E3"
      ps="4"
      pt="5"
      
      borderTopLeftRadius="8"
      borderBottomLeftRadius='8'
    >
      <Box pb="5">
        <WindowControls />
      </Box>
      <VStack
        gap={3}
        align="flex-start"
        overflow="scroll"
        h="400px"
        pe='0.5'
        css={{
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#A2A3A3",
            borderRadius: "30px",
          },
        }}
      >
        <Menu
          label="Favourites"
          list={[
            "AirDrop",
            "Recents",
            "Applications",
            "Desktop",
            "Documents",
            "Downloads",
          ]}
          active={active}
          onClick={setActive}
        />
        <Menu
          label="iCloud"
          list={["iCloud Drive", "Shared"]}
          active={active}
          onClick={setActive}
        />
        <Menu
          label="iCloud"
          list={["iCloud Drive", "Shared"]}
          active={active}
          onClick={setActive}
        />
        <Menu
          label="iCloud"
          list={["iCloud Drive", "Shared"]}
          active={active}
          onClick={setActive}
        />
        <Menu
          label="Tags"
          list={["Red", "Orange", "Yellow", "Green", "Blue", "Purple"]}
          active={active}
          onClick={setActive}
        />
      </VStack>
    </Flex>
  );
}
