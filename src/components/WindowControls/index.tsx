import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

export default function WindowControls() {
    return (
        <Flex gap='2'>
            <Box h='3' w='3' borderRadius='100%' bg='#FF5F57' border='0.5px solid #7D0406' />
            <Box h='3' w='3' borderRadius='100%' bg='#FF5F57' border='0.5px solid #975700'/>
            <Box h='3' w='3' borderRadius='100%' bg='#27C840' border='0.5px solid #036200' />
        </Flex>
    )
}