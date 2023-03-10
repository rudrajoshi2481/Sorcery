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
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient()
 
function Index() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <Box>
        <Text>⭐ soul purpose of this container is to perform docking</Text>
        <HStack>
          <Text>Julia Docker Container Status : </Text>
          <Text color={"green"}>Working</Text>
        </HStack>
        <Explorer />
      </Box>
      </QueryClientProvider>
    </>
  );
}


export default Index;
