import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import {useRouter} from "next/router"
import Axios from "axios"
import {createdocproject} from "../../components/config/backendLinks"
import {UserContext} from "../../context/Usercontext"
function Createnewproject() {
const [UserData,setUserData] = useContext(UserContext)
const toast = useToast()
const router = useRouter()

  const [FormData, setFormData] = useState({
    title:"sowthing",
    description:"sowthing",
    share:"sowthing",
    body:"sowthing"
  })


  const createProjectHandler = () => {
    Axios.post(createdocproject,{...FormData,
      uuid:UserData.uuid,
      token:UserData.token}).then(doc => {
      console.log(doc,"Create Project");
      if (doc.data.status === 400) {
        return toast({
          title:"Error creating Project",
          description:doc.data.msg,
          status:"error",
          colorScheme:true
        })
      }
      
      router.back()
      
      toast({
        title:"Project Created ",
        description:doc.data.msg,
        status:"success",
        colorScheme:true
      })

    }).catch(err => {
      // console.log(err);
      return toast({
        title:"Server not found",
        description:err,
        status:"error",
        colorScheme:true
      })
    })
  }

  const route = useRouter()
  return (
    <Box
      p="6"
      display={"flex"}
      justifyContent="center"
      flexDir={"column"}
      alignItems="center"
    >
      <Box pb="3" display={"flex"} alignItems="flex-start">
      <Tooltip label="Go Back"><Button onClick={e => {route.back()} } fontSize={"32"} variant="ghost">{"<"}</Button></Tooltip>
      <Heading   className="title" >
        Create New Project
      </Heading>
      </Box>
      <Divider />
      <Box mt="6" p="9" minW={"1080"} border="1px solid black" display="flex" flexDir={"row"}>
        <Box flex="1" maxW={"500"} >
          <FormControl>
            <FormLabel>Project Title</FormLabel>
            <Input mb="3" onChange={e => setFormData({...FormData,title:e.target.value})} placeholder="Project title" />

            <FormLabel>Description</FormLabel>
            <Input mb="3" placeholder="Description" onChange={e => setFormData({...FormData,description:e.target.value})}/>

            <FormLabel>Body</FormLabel>
            <Textarea mb="3" placeholder="body" onChange={e => setFormData({...FormData,body:e.target.value})}/>

            <FormLabel>Share with</FormLabel>
            <Textarea mb="3" placeholder="@raju @jaggu" onChange={e => setFormData({...FormData,share:e.target.value.split("@")})}/>

            <Button onClick={e => setFormData("")} mt="3" mr="3" color={"tomato"} variant="ghost">
              Reset
            </Button>
            <Button mt="3" colorScheme={"green"} onClick={e => createProjectHandler()} variant="outline">
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
