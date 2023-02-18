import { Box, Button, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function LoginRequired() {
  return (
    <Box display={"flex"} flexDir="column" justifyContent="center" alignItems={"center"} height="50vh">
        <Heading className='title'>😠 login Required</Heading>
        <Link href="/login"><Button color={"green"} m="6" variant={"link"}>Login Page</Button></Link>
    </Box>
  )
}

export default LoginRequired