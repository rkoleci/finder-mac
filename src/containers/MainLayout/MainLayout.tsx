import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export default function MainLayout() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <GridItem w="100%" h="10" bg="blue.500">
        1
      </GridItem>
      <GridItem w="100%" h="10" bg="blue.500">
        2
      </GridItem>
    </Grid>
  );
}
