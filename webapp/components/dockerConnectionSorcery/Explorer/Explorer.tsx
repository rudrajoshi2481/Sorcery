import { Box, Divider } from "@chakra-ui/react";
import BreadcrumbPaths from "./BreadcrumbPath";
import FileTree from "./FileTree";
import FolderView from "./FolderView";
import {useEffect} from "react"
import { useQuery } from "react-query";
import { getallsession } from "@/components/config/backendLinks";
const Explorer = () => {

  // fetch data every interval of 15 sec
  const { isLoading, error, data } = useQuery('repoData', () =>
     fetch(getallsession).then(res =>
       res.json()
     )
   )

  

    return (
      <Box border={"1px solid gray"} borderRadius="5" my="3" p="6">
        <BreadcrumbPaths />
        <Box mt="6" display={"flex"}>
          <Box flex={"1"} display="flex" justifyContent={"space-between"}>
          <FileTree />
          <Divider orientation="vertical"/>
          </Box>
          <Box flex={"6"}>
            {/* <FolderView /> */}
          </Box>
        </Box>
      </Box>
    );
  };


  // create two folders 

  // ligand
  // save all ligands in here


  
  // proteins


  
  export default  Explorer