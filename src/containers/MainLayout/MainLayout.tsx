import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import Filters from "containers/Filters";
import SideBar from "containers/Sidebar";
import React from "react";

export default function MainLayout() {
  return (
    <Box
      bg="url('https://wallpaperaccess.com/full/38598.jpg')"
      width="100%"
      h="100vh"
    >
      <Box
        w="60%"
        pos="absolute"
        top="100"
        left="0"
        right="0"
        margin="auto"
        minH="450"
        borderTopLeftRadius="8"
        borderBottomLeftRadius="8"
      >
        <Grid templateColumns="1fr 3fr">
          <GridItem
            h="100%"
            bg="blue.500"
            borderTopLeftRadius="8"
            borderBottomLeftRadius="8"
          >
            <SideBar />
          </GridItem>
          <GridItem w="100%" h="100%" bg="#F6F6F6">
            <Filters />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
