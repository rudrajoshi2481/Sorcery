import { helloWorld } from "@/components/config/backendLinks";
import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";
// fetch all projects

// project : title,description,body,protein serch history,all ligand uploaded,all out ligands
const fetchProjects = () => {
  axios.get(helloWorld);
};

function Docking() {
  const { isLoading, error, data, isError } = useQuery(
    "projects",
    fetchProjects
  );

  return (
    <Box p="3">
      <Box mb="6" display={"flex"} maxW={"350"}>
        <Input placeholder="search for project" />
        <Button>🔍</Button>
      </Box>
      <Divider />
      <Box border={"1px solid grey"} p="6">
        <Box display={"flex"} justifyContent="space-between">
          <Heading className="title">Projects</Heading>

          <Link href="/docking/create-new-project">
            <Button colorScheme={"green"} variant={"outline"}>
              Create New Project
            </Button>
          </Link>
        </Box>

        {!true ? (
          <LoadingProjects />
        ) : (
          <Flex flexWrap={"wrap"}>
            <ProjectsCards
              projectId={"1234"}
              description=" you will be suprised, this is the one of the best description text of my life"
              title={"Triple Negative Breast cancer"}
              createdAt={"08/04/2001"}
            />
          </Flex>
        )}
      </Box>
    </Box>
  );
}

const LoadingProjects = () => {
  return (
    <Stack mt="9" maxW={"350"}>
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
};

function ProjectsCards({ projectId, description, title, createdAt }: any) {
  return (
    <Link href={`/docking/${projectId}`}>
    <Card
      maxW={"350"}
      minW="350"
      p="3"
      m="6"
      border={"1px solid green"}
      _hover={{ cursor: "grab" }}
    >
      <Stack>
        <CardBody>
          <Heading>{title}</Heading>
          <Text py="3" color="grey">
            {description}
          </Text>
          <Divider />
          <Box>
            <Text py="3">created At: {createdAt}</Text>
          </Box>
        </CardBody>
      </Stack>
    </Card>
    </Link>
  );
}

export default Docking;
