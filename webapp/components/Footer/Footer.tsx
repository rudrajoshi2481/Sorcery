import { Box, Divider, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { helloWorld } from "../config/backendLinks";

function Footer() {
  const [BackendStatus, setBackendStatus] = useState("");
  const StatusCheck = () => {
    Axios.get(helloWorld).then((res) => {
      setBackendStatus(res.data);
    }).catch(Err => {
      
      
    })
  };

  StatusCheck();

  return (
    <Box>
      <Divider />
      <Box p="9" maxW="500">
        <Box border={"1px solid black"} p="3" display="flex" flexDir={"column"}>
          <Box display={"flex"}>
            <Text>status: </Text>{" "}
            <Text color={BackendStatus ? "green.400" : "tomato"}>
              {" "}
              {BackendStatus ? "working" : "not working"}{" "}
            </Text>
          </Box>{" "}
          
            {
              BackendStatus ? <Box>
              <Text>got reply :</Text><Text color={"green.400"}> {">"} {BackendStatus}</Text>
            </Box>  : null
            }
          
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
