import { Box, Button, Container, Divider, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Login() {
  return (
    <Container display={"flex"} justifyContent="center" alignItems={"center"}  flexDir="column">

        <Box mb="6">
        <Image src="./logo.svg" width="100" height={"100"} alt="logo" />
        </Box>
      <Box border="1px solid black" display={"flex"} justifyContent="center" minW={"450"}>
        <Box p="9" >
          <FormControl p="6" >
            <FormLabel >Email :</FormLabel>
            <Input placeholder="email address" type="email" mb="3"/>
            <FormLabel >Password :</FormLabel>
            <Input placeholder="password" type={"password"} />

            <Link href="#"><Text color={"grey"} py="1">forgot password?</Text></Link>
          </FormControl>
          <Divider  />
          
          <Button m="6" colorScheme={"green"} variant={"solid"}>Google</Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
