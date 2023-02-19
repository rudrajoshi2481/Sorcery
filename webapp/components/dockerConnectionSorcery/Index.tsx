import { Box, Button, Card, CardHeader, Divider, Heading, HStack, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
function Index() {
  return (
    <>
      <Box>
        <Text>⭐ soul purpose of this container is to perform docking</Text>
        <HStack>
          <Text>Julia Docker Container Status : </Text>
          <Text color={"green"}>Working</Text>
        </HStack>
        <Explorer />
      </Box>
    </>
  );
}

const Explorer = () => {
  return (
    <Box border={"1px solid gray"} borderRadius="5" my="3" p="6">
      <BreadcrumbPaths />
      <Box mt="6" display={"flex"}>
        <Box flex={"1"} display="flex" justifyContent={"space-between"}>
        <FileTree />
        <Divider orientation="vertical"/>
        </Box>
        <Box flex={"6"}>
          <FolderView />
        </Box>
      </Box>
    </Box>
  );
};

const BreadcrumbPaths = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Box display={"flex"} alignItems="center">
      <Text mr="3" fontSize={"xl"}>
        {">"}
      </Text>
      <Box>
        <Breadcrumb fontWeight="medium" fontSize="sm">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">About</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Current</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      </Box>
      <Box>
      <Checkbox defaultChecked>show hidden</Checkbox>
      </Box>
    </HStack>
  );
};

const FolderView = () => {

  const handleClick  = () => {
    console.log("Sidement");
    
  }

  return (
    <Box  onContextMenu={handleClick} display={"flex"} flexWrap="wrap" px="6">
      <Card _hover={{cursor:"grab"}} m="3" minW={"250"} border="1px solid gray">
        <CardHeader>work 01</CardHeader>
      </Card>
      <Card _hover={{cursor:"grab"}} m="3" minW={"250"} border="1px solid gray">
        <CardHeader>work 02</CardHeader>
      </Card>
      <Card _hover={{cursor:"grab"}} m="3" minW={"250"} border="1px solid gray">
        <CardHeader>work 03</CardHeader>
      </Card>
    </Box>
  );
};

const FileTree = () => {
  return (
    <Box minH={"300"} pr="6" >
      <UnorderedList>
        <ListItem listStyleType={"none"} p="1" px="3" m="1">work 01</ListItem>
        <ListItem listStyleType={"none"} p="1" px="3" m="1">work 02</ListItem>
        <ListItem listStyleType={"none"} p="1" px="3" m="1">work 02</ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Index;
