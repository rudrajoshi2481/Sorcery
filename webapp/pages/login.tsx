import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Tabs,
  Text,
  Tooltip,
  useToast,
  VStack,
} from "@chakra-ui/react";
import Axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useContext } from "react";
import IsEmail from "validator/lib/isEmail";
import IsStrongPassword from "validator/lib/isStrongPassword";
import { getToken, logOut, saveToken } from "@/components/logic/cookie";
import { createuser, loginuser, providerauth } from "@/components/config/backendLinks";
import { UserContext } from "@/context/Usercontext";
import { useRouter } from "next/router";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { fireAuth } from "@/components/config/fire";
import axios from "axios";

function Login() {
  return (
    <Container
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      flexDir="column"
    >
      <Box mb="6" mt="55">
        <Image src="./logo.svg" width="100" height={"100"} alt="logo" />
      </Box>

      <Form />
    </Container>
  );
}

const LogOutBtn = () => {
  const [UserData, setUserData]: any = React.useContext(UserContext);
  const route = useRouter();
  return (
    <Button
      colorScheme="red"
      my="9"
      onClick={(e) => {
        logOut();
        route.reload();
      }}
    >
      Logout from {UserData.email}
    </Button>
  );
};

const Form = () => {
  const toast = useToast();
  const [IsLoading, setIsLoading] = useState(false);
  const provider = "";
  const ProviderHandler = (provider: any) => {
    if (provider === "google") {
      provider = new GoogleAuthProvider();
    }
    if (provider === "github") {
      provider = new GithubAuthProvider();
    }

    const auth = fireAuth;
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google auth started");

        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user.providerData, "data verified");
        // send it to database
        const { uid, email, providerId, displayName }: any = user.providerData;

        axios
          .post(providerauth, { uid, email, providerId, displayName })
          .then((res) => {
            if (res.data.status === 400) {
              toast({
                title: "Faced some error on server side",
                status: "error",
                isClosable: true,
              });
            }

            const { msg } = res.data;
            toast({
              title: "Successfully",
              status: "success",
              description: msg,
              isClosable: true,
            });
          })
          .catch((err) => {
            toast({
              title: "Faced some error on server side",
              status: "error",
              isClosable: true,
            });
          });

        // if user present then okay
        // and verigy token on backend

        // if not then create new user

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <Box>
      <VStack p="9">
        <Heading my="9">Login in Sorcery</Heading>
        <Button
          colorScheme={"green"}
          minW="200"
          isLoading={IsLoading}
          loadingText={"google loading"}
          onClick={(e) => {
            ProviderHandler("google");
          }}
        >
          Google
        </Button>
        <Button
          colorScheme={"blue"}
          isDisabled={true}
          minW="200"
          isLoading={IsLoading}
          loadingText={"github loading"}
          onClick={(e) => {
            ProviderHandler("github");
          }}
        >
          Github comming soon
        </Button>
      </VStack>
    </Box>
  );
};

// const Form = () => {
//   const [Email, setEmail] = useState("");
//   const [password, setpassword] = useState("");
//   const [warningEmail, setWarningEmail] = useState("");
//   const [warningPassword, setWarningPassword] = useState("");
//   const [IsLoading, setIsLoading] = useState(false);

//   const [UserData, setUserData]: any = useContext(UserContext);

//   const toast = useToast();

//   const router = useRouter();
//   const SubmitData = (e: any) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // const token = getToken()
//     setWarningPassword("");
//     setWarningEmail("");

//     if (!IsEmail(Email)) {
//       setIsLoading(false);
//       return setWarningEmail("Email Invalid");
//     }

//     Axios.post(createuser, { email: Email, password: password })
//       .then((doc) => {
//         console.log(doc);
//         if (doc.data.status != 400) {
//           saveToken(doc.data);
//           // setUserData(doc.data)
//           toast({
//             title: "Account Created 😀",
//             isClosable: true,
//             duration: 9000,
//             status: "success",
//           });
//           router.reload();
//         } else {
//           toast({
//             title: "Facing problems to Create account 😭",
//             isClosable: true,
//             duration: 9000,
//             status: "error",
//           });
//         }
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         toast({
//           title: "Facing problems connecting to server",
//           isClosable: true,
//           duration: 9000,
//           status: "warning",
//         });
//         setIsLoading(false);
//       });
//   };

//   const LoginUser = (e: any) => {
//     e.preventDefault();
//     setIsLoading(true);
//     const router = useRouter();
//     // const token = getToken()
//     setWarningPassword("");
//     setWarningEmail("");

//     if (!IsEmail(Email)) {
//       setIsLoading(false);
//       return setWarningEmail("Email Invalid");
//     }

//     // if (!IsStrongPassword(password)) {
//     //   return setWarningPassword("Set Strong Password");
//     // }

//     Axios.post(loginuser, { email: Email, password: password })
//       .then((doc) => {
//         console.log(doc);
//         if (doc.data.status != 400) {
//           saveToken(doc.data);
//           // setUserData(doc.data)
//           toast({
//             title: "you are logged in 😀",
//             isClosable: true,
//             duration: 9000,
//             status: "success",
//           });
//           router.reload();
//         } else {
//           toast({
//             title: "Facing problems to Create account 😭",
//             isClosable: true,
//             duration: 9000,
//             status: "error",
//           });
//         }
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         toast({
//           title: "Facing problems connecting to server",
//           isClosable: true,
//           duration: 9000,
//           status: "warning",
//         });
//         setIsLoading(false);
//       });
//   };

//   return (
//     <Box
//       border="1px solid black"
//       display={"flex"}
//       justifyContent="center"
//       minW={"450"}
//     >
//       <Box p="9">
//         <FormControl p="6">
//           <FormLabel>Email :</FormLabel>
//           <Input
//             placeholder="email address"
//             type="email"
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//           {warningEmail ? (
//             <Text color={"tomato"} mb="3">
//               {warningEmail}
//             </Text>
//           ) : null}
//           <FormLabel>Password :</FormLabel>
//           <Input
//             placeholder="password"
//             type={"password"}
//             onChange={(e) => {
//               setpassword(e.target.value);
//             }}
//           />
//           {warningPassword ? <Text>{warningPassword}</Text> : null}
//           {/*
//             <Tooltip label="Forget Password Not Implemented Yet 😄">
//             <Link href="#">
//               <Text color={"grey"} py="1">
//                 forgot password?
//               </Text>
//             </Link>
//             </Tooltip> */}
//           <Button
//             mt="6"
//             isLoading={IsLoading}
//             loadingText="loading ...😀"
//             onClick={(e) => {
//               LoginUser(e);
//             }}
//             colorScheme={"green"}
//             variant={"ghost"}
//           >
//             login
//           </Button>
//           <Divider />
//           <Button
//             mt="6"
//             isLoading={IsLoading}
//             loadingText="loading ...😀"
//             onClick={(e) => {
//               SubmitData(e);
//             }}
//             colorScheme={"green"}
//             variant={"ghost"}
//           >
//             create Account
//           </Button>
//         </FormControl>
//         {/* <Divider /> */}
//       </Box>
//     </Box>
//   );
// };

export default Login;
