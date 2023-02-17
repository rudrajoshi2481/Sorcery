import {
  Box,
  Button,
  Code,
  Container,
  Divider,
  Heading,
  ListItem,
  Tag as Tab,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LOGO from "../../public/logo.svg";
function Navbar() {
  const listItem = [
    {
      name: "Products",
      sublinks: [
        {
          name: "SorceryDock",
          icons: "",
          link: "",
          description:
            "Dock more than 20,000 ligand in one click can save you thousands of years",
        },
        {
          name: "SorceryBook",
          icons: "",
          link: "",
          description: "version control for yours latest Sorcery",
        },
        {
          name: "Sorcery Calculator",
          icons: "",
          link: "",
          description: "know the values of your Sorcery constituents",
        },
      ],
    },
    {
      name: "Case Study",
      sublinks: [
        {
          name: "TNBC",
          icons: "",
          link: "",
          description:
            "Case study on triple negative breast cancer by - Ankita mam",
        },
        {
          name: "Autodock Automation",
          icons: "",
          link: "",
          description: "Case study on Automation on Autodock using julia",
        },
      ],
    },
  ];
  return (
    <Box  px="5" py="3" display={"flex"} alignItems="center" justifyContent={"space-between"}>
      {/* <Heading><LOGO /></Heading> */}
      <Box display={"flex"} alignItems="center">
        <Box >
          <Image src={"./logo.svg"} width="60" height="60" alt={"logo"} />
        </Box>

        <UnorderedList display={"flex"}>
          {listItem.map((item) => {
            return <ListItemComponent item={item} />;
          })}
        </UnorderedList>
      </Box>
      {/* Righ Hand side */}
      <Box>
        
        <Code colorScheme={"gray"} p="2" mr="3" border="1px solid black">⭐ Github</Code>
        <Button colorScheme={"green"} variant="outline">Get Started</Button>
      </Box>
    </Box>
  );
}

const ListItemComponent = ({ item }: any) => {
  const [IsHovering, setIsHovering] = useState(false);
  return (
    <Box
      mx="5"
      my="3"
      onMouseEnter={(e) => setIsHovering(true)}
      onMouseLeave={(e) => setIsHovering(false)}
    >
      <Text fontWeight={"medium"}>{item.name}</Text>
      <Box my="3">
        {IsHovering ? <SubLinkComponent sublinks={item.sublinks} /> : null}
      </Box>
    </Box>
  );
};

const SubLinkComponent = ({ sublinks }: any) => {
  const [dispalyText, setdispalyText] = useState(
    "world has always been good place with the sorceroers like us ..."
  );

  return (
    <Box
    border={"1px solid black"}
    display={"flex"}
    position={"absolute"}
    maxW="850"
    bg={"white"}
    maxH={"250"}
    py="3"
    borderRadius={"10"}
    
    >
      <Box borderRight={"1px solid grey"}>
        <UnorderedList display={"flex"} flexDir="column">
          {sublinks.map((subItem: any) => {
            return (
              <>
                <Link
                  onMouseEnter={(e) => {
                    setdispalyText(subItem.description);
                  }}
                  href={"#"}
                >
                  <ListItem
                    _hover={{ bgColor: "green.400" }}
                    p="4"
                    m="2"
                    listStyleType={"none"}
                  >
                    <Text display={"flex"} justifyContent="row">
                      😊 {subItem.name}
                    </Text>
                  </ListItem>
                </Link>
                <Divider />
              </>
            );
          })}
        </UnorderedList>
      </Box>
      <Divider orientation="vertical" />
      <Box p="4" maxW={"350"} minW={"350"}>
        <Text>{dispalyText}</Text>
      </Box>
    </Box>
  );
};

export default Navbar;