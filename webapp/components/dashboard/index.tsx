import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function Index() {
  return (
    <Box>
        <Activities />
        <Divider />
        {/* <Results /> */}
    </Box>
  )
}

const Results = () => {
  return (
    <Box mt="3">
      <Heading className='title'>Results</Heading>
    </Box>
  )
}

const Activities = () => {
    return (
        <Box >
            <Text>{"🍕 "}Logs of current activity ...</Text>
            <Box minH={"350"} display="flex" justifyContent={"center"} flexDir="column">
            {/* <Heading textAlign={"center"}>😊😉😗😆😄😁😀😙😪</Heading> */}
            <Heading textAlign={"center"} mt="3" className='title' >😄 No Servers Running</Heading>
            </Box>
        </Box>
    )
}

export default Index