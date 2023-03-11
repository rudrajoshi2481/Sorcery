import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import {AiFillDelete} from "react-icons/ai"
function DeleteSession() {
  return (
    <Box>
        <Button><AiFillDelete /></Button>
    </Box>
  )
}

export default DeleteSession