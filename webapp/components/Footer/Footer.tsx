import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  ListItem,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { helloWorld, loginuser } from "../config/backendLinks";
import { getToken, logOut, saveToken } from "../logic/cookie";
import axios from "axios";
import { useRouter } from "next/router";

function Footer() {
  const [BackendStatus, setBackendStatus] = useState("");
  const StatusCheckNodeServers = () => {
    Axios.get(helloWorld)
      .then((res) => {
        setBackendStatus(res.data);
      })
      .catch((Err) => {});
  };

  StatusCheckNodeServers();

  return (
    <Box  bg="green.100">
      <Divider />
      <HStack flexWrap={"wrap"} alignItems={"flex-start"}>
        <Box>
          <Box p="9">
            <Heading className="title" py="6">
              Server Status
            </Heading>
            <Box
              border={"1px solid black"}
              p="3"
              display="flex"
              flexDir={"column"}
            >
              <Box display={"flex"}>
                <Box display={"flex"}>
                  <Text>status of node.js servers: </Text>{" "}
                  <Text color={BackendStatus ? "green.400" : "tomato"}>
                    {"  "}
                    {BackendStatus ? "working" : "not working"}{" "}
                  </Text>
                </Box>
              </Box>{" "}
              {BackendStatus ? (
                <Box>
                  <Text>got reply from server :</Text>
                  <Text color={"green.400"}>
                    {" "}
                    {">"} {BackendStatus}
                  </Text>
                </Box>
              ) : null}
            </Box>
          </Box>
        </Box>

        <Box p="9">
          <LoginDummyAccoutn />
          
        </Box>
      </HStack>
    </Box>
  );
}

const LoginDummyAccoutn = () => {
  const toast = useToast();
  const route = useRouter();
  
  const [IsLoginBtnLoading, setIsLoginBtnLoading] = useState(false);

  const [showLogoutBtn, setshowLogoutBtn] = useState(false);

  useEffect(() => {
    let token = getToken();
    if (token) setshowLogoutBtn(true);
  }, []);

  const Loginfunction = ({ email, password }: any) => {
    setIsLoginBtnLoading(true);
    // console.log(users);

    axios
      .post(loginuser, { email, password })
      .then((res) => {
        if (res.data.token) {
          saveToken(res.data);
          toast({
            title: "Login success",
            description: "you are now loged in",
            status: "success",
            position: "top-right",
          });
        }
      })
      .then(() => {
        route.reload();
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Login failure",
          description: "facing issues",
          status: "error",
        });
      });
    setIsLoginBtnLoading(false);
  };

  const [Accounts, setAccounts] = useState([
    { name: "Bheem", emailId: "bheem@gmail.com", password: "bheem@123" },
    { name: "Raju", emailId: "raju@gmail.com", password: "raju@123" },
  ]);
  return(
    <Box  >
       <Box >
        <Heading  py="6" className="title">Dummy Account</Heading>
           {
            !showLogoutBtn ?  <UnorderedList border="1px solid black"   >
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
                      <Button
                        onClick={(e) =>
                          Loginfunction({
                            email: users.emailId,
                            password: users.password,
                          })
                        }
                        isLoading={IsLoginBtnLoading}
                        variant={"outline"}
                        colorScheme="green"
                      >
                        Login
                      </Button>
                    </Box>
                  </ListItem>
                </>
              );
            })}
          </UnorderedList> : null 
           }
          </Box>
              <Box >
                
          {showLogoutBtn ? (
            <>
            <Text py="3">Logout from current account</Text>
              <Button 

                colorScheme={"red"}
                onClick={(e) => {
                  logOut();
                  route.reload();
                }}
              >
                Logout 
              </Button>
              </>
            ) : null}
              </Box>
    </Box>
  )
}

export default Footer;
