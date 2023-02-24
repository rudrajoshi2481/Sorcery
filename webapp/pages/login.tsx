import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import  Axios  from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState,useContext } from "react";
import IsEmail from "validator/lib/isEmail";
import IsStrongPassword from "validator/lib/isStrongPassword";
import { getToken, logOut, saveToken } from "@/components/logic/cookie";
import { createuser, loginuser } from "@/components/config/backendLinks";
import { UserContext } from "@/context/Usercontext";

function Login() {
  return (
    <Container
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      flexDir="column"
    >
      <Box mb="6">
        <Image src="./logo.svg" width="100" height={"100"} alt="logo" />
      </Box>
      <Form />
    </Container>
  );
}

const Form = () => {
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [warningEmail, setWarningEmail] = useState("");
  const [warningPassword, setWarningPassword] = useState("");
  const [IsLoading, setIsLoading] = useState(false)

  const [UserData,setUserData]:any = useContext(UserContext) 

  const toast = useToast() 

  const SubmitData = (e:any) => {
    e.preventDefault()
    setIsLoading(true)
    const token = getToken()
    setWarningPassword("")
    setWarningEmail("")

    if (!IsEmail(Email)) {
      setIsLoading(false) 
      return setWarningEmail("Email Invalid");
    }

    // if (!IsStrongPassword(password)) {
    //   return setWarningPassword("Set Strong Password");
    // }

    Axios.post(createuser,{email:Email,password:password,token}).then(doc => {
      console.log(doc);
      if (doc.data.status != 400) {
        saveToken(doc.data)
        
        toast({
          title:"Account Created 😀",
          isClosable:true,
          duration:9000,
          status:"success"
        })
      }else{
        toast({
          title:"Facing problems to Create account 😭",
          isClosable:true,
          duration:9000,
          status:"error"
        })
      }
      setIsLoading(false)
    }).catch(err => {
      console.log(err);
      toast({
        title:"Facing problems connecting to server",
        isClosable:true,
        duration:9000,
        status:"warning"
      })
      setIsLoading(false)
    })
  };

  const LoginUser = (e:any) => {
    e.preventDefault()
    setIsLoading(true)
    const token = getToken()
    setWarningPassword("")
    setWarningEmail("")

    if (!IsEmail(Email)) {
      setIsLoading(false) 
      return setWarningEmail("Email Invalid");
    }

    // if (!IsStrongPassword(password)) {
    //   return setWarningPassword("Set Strong Password");
    // }

    Axios.post(loginuser,{email:Email,password:password,token}).then(doc => {
      console.log(doc);
      if (doc.data.status != 400) {
        saveToken(doc.data.token)
        toast({
          title:"you are logged in 😀",
          isClosable:true,
          duration:9000,
          status:"success"
        })
      }else{
        toast({
          title:"Facing problems to Create account 😭",
          isClosable:true,
          duration:9000,
          status:"error"
        })
      }
      setIsLoading(false)
    }).catch(err => {
      console.log(err);
      toast({
        title:"Facing problems connecting to server",
        isClosable:true,
        duration:9000,
        status:"warning"
      })
      setIsLoading(false)
    })
  };


  return (
    <Box
      border="1px solid black"
      display={"flex"}
      justifyContent="center"
      minW={"450"}
    >
      <Box p="9">
        <FormControl p="6">
          <FormLabel>Email :</FormLabel>
          <Input placeholder="email address" type="email"  onChange={e => {setEmail(e.target.value)}}/>
          {warningEmail ? <Text color={"tomato"} mb="3">{warningEmail}</Text> : null}
          <FormLabel>Password :</FormLabel>
          <Input placeholder="password" type={"password"} onChange={e => {setpassword(e.target.value)}}/>
          {warningPassword ? <Text>{warningPassword}</Text> : null}
{/* 
          <Tooltip label="Forget Password Not Implemented Yet 😄">
          <Link href="#">
            <Text color={"grey"} py="1">
              forgot password?
            </Text>
          </Link>
          </Tooltip> */}
        <Button mt="6" isLoading={IsLoading} loadingText="loading ...😀"  onClick={e => {LoginUser(e)}} colorScheme={"green"} variant={"ghost"}>

      login
        </Button>
        <Divider />
        <Button mt="6" isLoading={IsLoading} loadingText="loading ...😀"  onClick={e => {SubmitData(e)}} colorScheme={"green"} variant={"ghost"}>

      create Account
        </Button>
        </FormControl>
        {/* <Divider /> */}
      </Box>
    </Box>
  );
};

export default Login;
