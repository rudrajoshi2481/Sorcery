import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Index() {
  const [Accounts, setAccounts] = useState([
    { name: "Bheem", emailId: "bheem@sorcery.com", passowrd: "15236544654" },
    { name: "Raju", emailId: "raju@sorcery.com", passowrd: "15236544654" },
  ]);
  return (
    <Box>
      <Container maxW={"container.xl"}>
        <Box>{/* Hero Part */}</Box>

        <Box display={"flex"} justifyContent={"space-between"}>
          <Box p="6">
            <Heading>Dummy Accounts</Heading>
            <Text color={"gray.500"} py="3" maxW="80%">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </Box>
          <Box p="6" minW={"450"}>
            <UnorderedList border="1px solid black" borderRadius={"10"} p="6">
              {Accounts.map((users) => {
                return (
                  <>
                    <ListItem
                      p="2"
                      display={"flex"}
                      justifyContent="space-between"
                      alignItems={"Center"}
                      m="2"
                      listStyleType={"none"}
                    >
                      <Box>
                        <Heading fontSize={"xl"}>{users.name}</Heading>
                        <Divider />
                        <Text>{users.emailId}</Text>
                        <Text>{users.passowrd}</Text>
                      </Box>
                      <Box>
                        <Button variant={"outline"} colorScheme="green">
                          Login
                        </Button>
                      </Box>
                    </ListItem>
                  </>
                );
              })}
            </UnorderedList>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Index;
