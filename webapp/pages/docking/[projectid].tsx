import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Tooltip,
  useDisclosure,
  useSafeLayoutEffect,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState, useContext } from "react";
import { Router, useRouter } from "next/router";
import Dashboard from "../../components/dashboard/index";
import LoginRequired from "@/components/ErrorStatus/LoginRequired";
import { getToken } from "@/components/logic/cookie";
import ConfigComponent from "@/components/dashboard/panels/ConfigsComponent";
import DockerContainerSorceryComponent from "@/components/dockerConnectionSorcery/Index";
import Playground from "@/components/dashboard/panels/Playground";
import { deleteproject, getoneproject } from "@/components/config/backendLinks";
import Axios from "axios";
import { useQuery } from "react-query";
import { UserContext } from "@/context/Usercontext";
import { AiOutlineSetting, AiOutlineDelete } from "react-icons/ai";
function ProjectId() {
  const [IsUserLogedIn, setIsUserLogedIn] = useState(true);
  const [Data, setData]: any = useState();
  
  const router = useRouter();
  const [UserData, setUserData]: any = useContext(UserContext);

  // console.log(Data._id);

  useEffect(() => {
    const checkStatus = async () => {
      if (await getToken()) {
        setIsUserLogedIn(true);
      }
    };

    Axios.post(getoneproject, {
      token: UserData.token,
      projectId: router.query.projectid,
    }).then((res) => {
      // console.log(res.data.doc);
      setData(res.data.doc);
    });
    checkStatus();
  }, []);

  
  let date = new Date(Data?.createdAt).toLocaleString();
  let lastOnline = new Date(Data?.lastOnline).toLocaleString();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      {IsUserLogedIn ? (
        <>
          <Box>
            <HStack mx="9" justifyContent={"space-between"}>
              <RoutingBar
                title={Data?.title}
                createdAt={date}
                body={Data?.body}
                description={Data?.description}
                lastOnline={lastOnline}
              />
              <Box>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<AiOutlineSetting />}
                    variant="outline"
                  />
                  <MenuList>
                    <MenuItem
                      onClick={onOpen}
                      color={"tomato"}
                      icon={<AiOutlineDelete />}
                      command="⌘T"
                    >
                      Delete Project
                    </MenuItem>
                  </MenuList>
                </Menu>
                <ProjectDeleteDialog
                  isOpen={isOpen}
                  projectId={Data?._id}
                  title={UserData.title}
                  onOpen={onOpen}
                  data={UserData}
                  onClose={onClose}
                  cancelRef={cancelRef}
                />
              </Box>
            </HStack>
            <TabsPanelComponent data={Data} />
          </Box>
        </>
      ) : (
        <LoginRequired />
      )}
    </>
  );
}

function ProjectDeleteDialog({
  isOpen,
  onOpen,
  onClose,
  cancelRef,
  title,
  projectId,
  data
}: any) {
  const toast = useToast()
  const router = useRouter()
  const [UserData, setUserData]: any = useContext(UserContext);
  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const cancelRef = React.useRef()
  const deleteProjectHandler = () => {
    Axios.post(deleteproject, {
      projectId: projectId,
      token: UserData.token,
    }).then((res) => {
      if (res.data.status === 400) {
        return toast({
          title:"Faced problem deleting the project",
          description:res.data.msg,
          status:"error",
          isClosable:true
        })
      }
      router.push("/docking")
      return toast({
        title:"Deleted the project",
        description:res.data.msg,
        status:"success",
        isClosable:true
      })
    }).catch(err => {
      return toast({
        title:"Server Error",
        description:err,
        status:"error",
        isClosable:true
      })
    });
  };


  return (
    <>
      {/* <Button colorScheme='red' onClick={onOpen}>
        Delete Customer
      </Button> */}

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Project
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want delete {title}? You can't undo this action
              afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={(e) => {
                  onClose();
                  deleteProjectHandler();
                }}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

const TabsPanelComponent = ({ data }: any) => {
  return (
    <Box mx="9" my="3">
      {
        // JSON.stringify(data.data.doc)
      }
      <Tabs defaultIndex={3}>
        <TabList>
          <Tab>Dashboard</Tab>
          <Tab>Sorcery</Tab>
          <Tab>Configs</Tab>
          <Tab>Playground</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Dashboard />
          </TabPanel>
          <TabPanel>
            <DockerContainerSorceryComponent />
          </TabPanel>
          <TabPanel>
            <ConfigComponent />
          </TabPanel>
          <TabPanel>
            <Playground />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

const RoutingBar = ({ title, body,createdAt, description, lastOnline }: any) => {
  const route = useRouter();

  return (
    <Box px="8" display={"flex"} alignItems="center">
      <Tooltip label="go back">
        <Button
          variant={"ghost"}
          onClick={(e) => route.back()}
          fontSize={"3xl"}
        >
          {"<"}
        </Button>
      </Tooltip>
      <VStack px="9" alignItems={"flex-start"}>
        <Heading className="title">{title}</Heading>
        <Text color="grey">{description}</Text>
        <Text color="grey">{body}</Text>
        <HStack justifyContent={"space-between"}>
          <HStack>
            <Text>Started date : </Text>
            <Text color="green.400">{createdAt}</Text>
          </HStack>
          <HStack px="6">
            <Text>Last seen : </Text>
            <Text color="green.400">{lastOnline}</Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProjectId;
