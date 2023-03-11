import { Box, Button, Card, CardHeader, Divider, Heading, HStack, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import Explorer from "./Explorer/Explorer";
 
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


export default Index;
