import { createsession } from "@/components/config/backendLinks";
import { ProjectContext } from "@/context/ProjectWorkingContext";
import { UserContext } from "@/context/Usercontext";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";

function CreateNewSession() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [UserData, setUserData]: any = useContext(UserContext);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const toast = useToast()

  const [IsLoading, setIsLoading] = useState(false)

  const [SessionDetails, setSessionDetails] = useState({
    sessionName: "based on random shit",
    description: "Ex veniam consectetur nisi in.",
  });
  const [ProjectData, setProjectData]:any = useContext(ProjectContext);
const CreateSessionHandler = () => {
    setIsLoading(true)
    axios
    .post(createsession, {
      sessionName: SessionDetails.sessionName,
      description: SessionDetails.description,
      projectId:ProjectData._id,
      userId: UserData.uuid,
      token: UserData.token,
    })
    .then((res) => {
        setIsLoading(false)
      // if res.body.status === 400
      console.log("Session Data Obtained");

      console.log(res.data);

      if (res.data.status === 200) {
        onClose()
        toast({
            title:"created session 🎉",
            isClosable:true,
            status:"success"
        })
      }else{
        toast({
            title:"Faced Error Creating session 😢",
            isClosable:true,
            description:res.data.msg,
            status:"error"
        })
      }
    })
    .catch((err) => {
        setIsLoading(false)
      console.log(err);
    })
}

  return (
    <Box>
      <Button colorScheme={"green"} onClick={onOpen} variant="outline">
        + New session
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your session</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Session Name</FormLabel>
              <Input
                value={SessionDetails.sessionName}
                onChange={(e) =>
                  setSessionDetails({
                    ...SessionDetails,
                    sessionName: e.target.value,
                  })
                }
                ref={initialRef}
                placeholder="Olaparib as lead"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
              value={SessionDetails.description}
              onChange={(e) =>
                setSessionDetails({
                  ...SessionDetails,
                  description: e.target.value,
                })
              }
                ref={initialRef}
                placeholder="Canidate designed from olaparib as lead"
              />
            </FormControl>

            <Box mt="4">
              <Text fontWeight={"bold"}>Default Folder :</Text>
              <Box>
                <Text>Ligand</Text>
                <Text>Receptors</Text>
                <Text>Documentation</Text>
              </Box>
            </Box>

            {/* 
            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl> */}
          </ModalBody>

          <ModalFooter>
            <Button isLoading={IsLoading} colorScheme="green" mr={3} onClick={e => CreateSessionHandler()}>
              create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default CreateNewSession;
