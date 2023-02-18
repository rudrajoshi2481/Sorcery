import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

function Index() {
  return (
    <Box>
        <Activities />  
    </Box>
  )
}

const Activities = () => {
    return (
        <Box borderRadius={"10"} border={"1px solid green"} p="6">
            <Heading fontSize={"xl"}>Last Activity</Heading>
        </Box>
    )
}

export default Index