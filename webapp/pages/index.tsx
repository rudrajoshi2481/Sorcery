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
  Flex,
  FormLabel,
  Heading,
  HStack,
  Input,
  ListItem,
  Spacer,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  Textarea,
  UnorderedList,
  useMediaQuery,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Playground from "@/components/dashboard/panels/Playground";
import Link from "next/link";
function Index({ props }: any) {
  // single media query with no options
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Box>
      <Container maxW={"container.xl"}>
        <HStack
          justifyContent={"space-between"}
          py="9"
          alignItems={"flex-start"}
          flexWrap="wrap-reverse"
        >
          <Box
            display={"flex"}
            style={{ width: "100vw" }}
            flexWrap="wrap"
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Herocomponent />
            <Box>
              <Text py="3" color="green.400">Stats calculated from realtime data</Text>
            <Traffics />
            </Box>
          </Box>
          {isLargerThan800 ? (
            <Box maxW={"500"}>
              {/* <Image alt="logo" src="./logo.svg" width={"400"} height="400" /> */}
            </Box>
          ) : null}
        </HStack>
        <Heading className="title" pb="6">
          Playground
        </Heading>
        <Playground showControls={isLargerThan800} />
        <Divider />
        <FeedBackForm />
        <FeedbackDatabase />
      </Container>
      <Footer />
    </Box>
  );
}

const Herocomponent = () => {
  return (
    <Box py="9">
      <Heading className="title" fontSize={"6xl"}>
        Sorcery Dock
      </Heading>
      <Text>
        {" "}
        Dock more than 20,000 ligand in one click & <br /> save your thousands
        of light years 😀{" "}
      </Text>
      <Link href="/login">
        <Button my="3" bg={"green.100"}>
          Get Started
        </Button>
      </Link>
    </Box>
  );
};

const FeedBackForm = () => {
  const [details, setdetails] = useState({
    name: "rudrajoshi",
    feedbackDetails:
      "i docked more than 500 molecule successfully just for fun 😑",
  });
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Box p="3" mb="65">
      <Heading textAlign={"center"} fontSize="4xl" className="title">
        Feedback Form
      </Heading>
      <Box
        boxShadow="lg"
        rounded="md"
        bg="white"
        p="6"
        my="6"
        border={"1px solid black"}
        display="flex"
        justifyContent={"space-between"}
        flexWrap="wrap"
      >
        <Box flex={"1"}>
          <FormLabel>Display Name :</FormLabel>
          <Input maxW={"620"} placeholder="rudrajoshi😀" />

          <FormLabel pt="6">Feedback :</FormLabel>
          <Textarea
            maxW={"620"}
            rows={5}
            placeholder="i docked more than 500 molecule successfully just for fun 😑"
          />
          <HStack justifyContent={"flex-end"}>
            <Button my="3" colorScheme={"green"}>
              Submit
            </Button>
          </HStack>
        </Box>
        {isLargerThan800 ? (
          <Box pl="32" mt="3%" flex={"1"}>
            <Text py="3">Demo 😅</Text>
            <Box
              p="6"
              boxShadow="lg"
              rounded="md"
              bg="white"
              maxW={"320"}
              border={"1px solid green"}
            >
              <Text py="2">@ {details.name}</Text>
              <Text>{details.feedbackDetails}</Text>
            </Box>{" "}
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

const FeedbackDatabase = () => {
  return (
    <Box mb="32">
      <Heading className="title">Feedback 🥰</Heading>
      <Flex flexWrap={"wrap"}>
        <Box
          minW={"300"}
          p="6"
          m="6"
          boxShadow="lg"
          rounded="md"
          bg="white"
          maxW={"320"}
          border={"1px solid green"}
        >
          <Text py="2">@ rudrajoshi</Text>
          <Text>
            Irure nostrud nisi voluptate qui do consectetur aute cupidatat
            consectetur amet fugiat velit duis.
          </Text>
        </Box>
        <Box
          minW={"300"}
          p="6"
          m="6"
          boxShadow="lg"
          rounded="md"
          bg="white"
          maxW={"320"}
          border={"1px solid green"}
        >
          <Text py="2">@ rudrajoshi</Text>
          <Text>
            Irure nostrud nisi voluptate qui do consectetur aute cupidatat
            consectetur amet fugiat velit duis.
          </Text>
        </Box>
        <Box
          minW={"300"}
          p="6"
          m="6"
          boxShadow="lg"
          rounded="md"
          bg="white"
          maxW={"320"}
          border={"1px solid green"}
        >
          <Text py="2">@ rudrajoshi</Text>
          <Text>
            Irure nostrud nisi voluptate qui do consectetur aute cupidatat
            consectetur amet fugiat velit duis.
          </Text>
        </Box>
        <Box
          minW={"300"}
          p="6"
          m="6"
          boxShadow="lg"
          rounded="md"
          bg="white"
          maxW={"320"}
          border={"1px solid green"}
        >
          <Text py="2">@ rudrajoshi</Text>
          <Text>
            Irure nostrud nisi voluptate qui do consectetur aute cupidatat
            consectetur amet fugiat velit duis.
          </Text>
        </Box>
        <Box
          minW={"300"}
          p="6"
          m="6"
          boxShadow="lg"
          rounded="md"
          bg="white"
          maxW={"320"}
          border={"1px solid green"}
        >
          <Text py="2">@ rudrajoshi</Text>
          <Text>
            Irure nostrud nisi voluptate qui do consectetur aute cupidatat
            consectetur amet fugiat velit duis.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

const Traffics = () => {
  // add cookies etcs

  
  return (
    <Box
      display={"flex"}
      flexWrap="wrap"
      p="9"
      className="title"
      border={"1px solid black"}
      boxShadow="lg"
      rounded="md"
      bg="white"
      style={{ marginRight: "10vw" }}
      fontSize="2xl"
    >
      <Box px="2">
        <FormLabel fontSize={"xl"}>Visits</FormLabel>
        <Heading className="title" color={"green.400"}>
          200
        </Heading>
      </Box>

      <Box px="2">
        <FormLabel fontSize={"xl"}>Users</FormLabel>
        <Heading className="title">200</Heading>
      </Box>
      <Box px="2">
        <FormLabel fontSize={"xl"}>Docked</FormLabel>
        <Heading className="title">200</Heading>
      </Box>
    </Box>
  );
};

export default Index;
