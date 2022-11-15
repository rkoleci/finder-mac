import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { FolderIcons } from "icons";
import React from "react";

interface IProps {
  label: string;
  list: Array<string>;
  active?: string;
  onClick: (item: string) => void;
}

export default function Menu({ label, active, list, onClick }: IProps) {
  console.log(111, active);
  return (
    <Box w="100%">
      <Text color="#A2A3A3" fontWeight="700" fontSize="xs">
        {label}
      </Text>
      <VStack align="flex-start" w="100%">
        {list.map((item: string) => (
          <Flex
            bg={active === item ? "#CBCBCB" : "transparent"}
            gap="2"
            w="100%"
            borderRadius="4"
            px="3"
            py="1"
            onClick={() => onClick(item)}
            _hover={{
              cursor: "pointer",
            }}
          >
            <Text fontSize="sm" color="#434444">
              {item}
            </Text>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
}
