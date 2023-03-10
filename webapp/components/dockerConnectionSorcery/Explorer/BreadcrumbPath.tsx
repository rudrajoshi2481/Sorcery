import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Checkbox, HStack, Text } from "@chakra-ui/react";
import CreateNewSession from "../logic/CreateNewSession";
import DeleteSession from "../logic/DeleteSession";

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
              <BreadcrumbLink href="#">All Sessions</BreadcrumbLink>
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
        <Box display={"flex"}>
        <CreateNewSession />
        {/* <DeleteSession /> */}
        </Box>
        <Box>
            <HStack>
            <Text color={"green.400"} mr="6">Loading ...</Text>
        <Checkbox defaultChecked>show hidden</Checkbox>
            </HStack>
        </Box>
      </HStack>
    );
  };

  

export default BreadcrumbPaths
  