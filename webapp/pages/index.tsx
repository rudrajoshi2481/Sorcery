import { helloWorld, userlogin } from "@/components/config/backendLinks";
import Footer from "@/components/Footer/Footer";
import { saveToken } from "@/components/logic/cookie";
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

function Index({props}:any) {
const toast = useToast()
  const [IsLoginBtnLoading, setIsLoginBtnLoading] = useState(false)

  const Loginfunction  = ({users}:any) => {
    setIsLoginBtnLoading(true)
    console.log(users);
    
    axios.post(userlogin,{...users}).then(res => {
      saveToken(res.data.token)
      toast({
        title:"Login success",
        description:"you are now loged in",
        status:"success"
      })
    }).catch(err => {
      console.log(err);
      toast({
        title:"Login failure",
        description:"facing issues",
        status:"error"
      })
    })

    setIsLoginBtnLoading(false)



    
  }


  const [Accounts, setAccounts] = useState([
    { name: "Bheem", emailId: "bheem@gmail.com", password: "123456" },
    { name: "Raju", emailId: "raju@gmail.com", password: "123456" },
  ]);
  return (
    <Box>
      <Container maxW={"container.xl"}>
      

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
                        <Text>{users.password}</Text>
                      </Box>
                      <Box>
                        <Button onClick={e => Loginfunction({users})} isLoading={IsLoginBtnLoading} variant={"outline"} colorScheme="green">
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
      <Footer />
    </Box>
  );
}

export default Index;
