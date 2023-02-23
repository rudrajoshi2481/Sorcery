import {
  helloWorld,
  loginuser,
  userlogin,
} from "@/components/config/backendLinks";
import Footer from "@/components/Footer/Footer";
import { getToken, logOut, saveToken } from "@/components/logic/cookie";
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
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
function Index({ props }: any) {
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
          saveToken(res.data.token);
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
            {showLogoutBtn ? (
              <Button
                colorScheme={"green"}
                onClick={(e) => {
                  logOut();
                  route.reload();
                }}
              >
                Logout
              </Button>
            ) : null}
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
            </UnorderedList>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default Index;
