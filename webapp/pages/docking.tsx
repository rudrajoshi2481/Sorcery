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
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

// fetch all projects

// project : title,description,body,protein serch history,all ligand uploaded,all out ligands

function Docking() {
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

        <Flex flexWrap={"wrap"}>
            <ProjectsCards />
            <ProjectsCards />
            <ProjectsCards />
            <ProjectsCards />
            <ProjectsCards />
            <ProjectsCards />
            <ProjectsCards />
            <ProjectsCards />
            <ProjectsCards />
            <ProjectsCards />
          
        </Flex>
        
      </Box>
    </Box>
  );
}

function ProjectsCards() {
  return (
    
    <Card maxW={"350"} minW="350" p="3" m="6" border={"1px solid green"} _hover={{cursor:"grab"}}>
      <Stack>
        <CardBody>
          <Heading>Project title</Heading>
          <Text py="3" color="grey">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <Divider />
          <Box><Text py="3">created At: 08/04/2001</Text></Box>
        </CardBody>
      </Stack>
    </Card>
    
  );
}

export default Docking;
