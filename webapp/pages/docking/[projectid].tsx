import { Box, Button, Heading, Tooltip } from "@chakra-ui/react";
import React from "react";

function ProjectId() {
  return (
    <Box>
      <RoutingBar title={"Triple Negative Breast Cancer"} />
    </Box>
  );
}

const RoutingBar = ({ title }:any) => {
  return (
    <Box  px="8" display={"flex"} alignItems="center">
      <Tooltip label="go back">
        <Button variant={"ghost"} fontSize={"3xl"}>
          {"<"}
        </Button>
      </Tooltip>
      <Heading className="title" px="9">{title}</Heading>
    </Box>
  );
};

export default ProjectId;
