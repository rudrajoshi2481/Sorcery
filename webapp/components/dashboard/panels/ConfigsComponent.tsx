import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Configs() {
  return (
    <Box>
      <Text color={"gray"}>
        {"⭐"} To change the values of autodock config file, this configs will
        be based on the files & folders already present in server (docker
        container)
      </Text>
      <Box border={"1px solid black"} mt="6" p="6" maxW={"800"}>
        <FormControl >
          <HStack mb="2" alignItems={"center"}>
            <Box  maxW={"350"}>
              <FormLabel>Name Ligand</FormLabel>
              <Input  placeholder="at1" />
            </Box>

            <Box maxW={"350"}>
              <FormLabel>Receptor / Protein</FormLabel>
              <Input placeholder="1UK1" />
            </Box>
          </HStack>

          <Box>
          <Divider />
          <Text my="2" color={"green"}>
            Transforms
          </Text>
          </Box>
          <Box>
            <HStack >
              <Box maxW={"350"}>
                <FormLabel>Center X</FormLabel>
                <Input mb="2" placeholder="10.116" />
              </Box>
              <Box maxW={"350"}>
                <FormLabel>Center Y</FormLabel>
                <Input mb="2" placeholder="10.116" />
              </Box>
              <Box maxW={"350"}>
                <FormLabel>Center Z</FormLabel>
                <Input mb="2" placeholder="10.116" />
              </Box>
            </HStack>

            <Text my="2" color={"green"}>Size</Text>
            <HStack>
            <Box maxW={"350"}>
              <FormLabel>Size X</FormLabel>
              <Input mb="2" placeholder="10.116" />
            </Box>
            <Box maxW={"350"}>
              <FormLabel>Size Y</FormLabel>
              <Input mb="2" placeholder="10.116" />
            </Box>
            <Box maxW={"350"}>
              <FormLabel>Size Z</FormLabel>
              <Input mb="2" placeholder="10.116" />
            </Box>
            </HStack>
          </Box>


          <Box>
          <Divider />
          <Text my="2" color={"green"}>
            Other Congifs
          </Text>
          </Box>
          <Box></Box>

          {/* Energy range */}

          <HStack>
          <Box maxW={"350"}>
              <FormLabel>Energy Range</FormLabel>
              <Input mb="2" placeholder="3" />
            </Box>
          <Box maxW={"350"}>
              <FormLabel>exhaustiveness</FormLabel>
              <Input mb="2" placeholder="8" />
            </Box>
          <Box maxW={"350"}>
              <FormLabel>num_mode</FormLabel>
              <Input mb="2" placeholder="10" />
            </Box>
          </HStack>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Configs;
