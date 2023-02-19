import { Box, Divider } from "@chakra-ui/react";
import BreadcrumbPaths from "./BreadcrumbPath";
import FileTree from "./FileTree";
import FolderView from "./FolderView";

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
  
  export default  Explorer