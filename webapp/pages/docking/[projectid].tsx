import {
  Box,
  Button,
  Heading,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Tooltip,
  useSafeLayoutEffect,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Dashboard from "../../components/dashboard/index";
import LoginRequired from "@/components/ErrorStatus/LoginRequired";
import { getToken } from "@/components/logic/cookie";

function ProjectId() {
  const [IsUserLogedIn, setIsUserLogedIn] = useState(true);

  useEffect(() => {
    const checkStatus = async () => {
      if (await getToken()) {
        setIsUserLogedIn(true);
      }
    };

    checkStatus()
  }, []);

  return (
    <>
      {IsUserLogedIn ? (
        <Box>
          <RoutingBar
            title={"Triple Negative Breast Cancer"}
            createdAt={"08/04/2001"}
          />
          <TabsPanelComponent />
        </Box>
      ) : (
        <LoginRequired />
      )}
    </>
  );
}

const TabsPanelComponent = () => {
  return (
    <Box mx="9" my="3">
      <Tabs>
        <TabList>
          <Tab>Dashboard</Tab>
          <Tab>Sorcery</Tab>
          <Tab>Configs</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Dashboard />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

const RoutingBar = ({ title, createdAt }: any) => {
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
        <HStack justifyContent={"space-between"}>
          <HStack>
            <Text>Started date : </Text>
            <Text color="green.400">{createdAt}</Text>
          </HStack>
          <HStack px="6">
            <Text>Last seen : </Text>
            <Text color="green.400">5 mins</Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProjectId;
