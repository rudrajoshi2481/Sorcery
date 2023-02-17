import React from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
function Createnewproject() {
  return (
    <Box
      p="6"
      display={"flex"}
      justifyContent="center"
      flexDir={"column"}
      alignItems="center"
    >
      <Heading pb="3" className="title">
        Create New Project
      </Heading>
      <Divider />
      <Box mt="6" p="9" minW={"1080"} border="1px solid black" display="flex" flexDir={"row"}>
        <Box flex="1" maxW={"500"} >
          <FormControl>
            <FormLabel>Project Title</FormLabel>
            <Input mb="3" placeholder="Project title" />

            <FormLabel>Description</FormLabel>
            <Input mb="3" placeholder="Description" />

            <FormLabel>Body</FormLabel>
            <Textarea mb="3" placeholder="body" />

            <FormLabel>Share with</FormLabel>
            <Textarea mb="3" placeholder="@raju @jaggu" />

            <Button mt="3" mr="3" color={"tomato"} variant="ghost">
              Reset
            </Button>
            <Button mt="3" colorScheme={"green"} variant="outline">
              Create Docking Project
            </Button>
          </FormControl>
        </Box>
        <Divider orientation="vertical" />
        <Box p="9" >
            <Heading pl="9" className="title">Shit happens,</Heading><Heading pl="9" className="title"> keep going</Heading>
        </Box>
      </Box>
    </Box>
  );
}

export default Createnewproject;
