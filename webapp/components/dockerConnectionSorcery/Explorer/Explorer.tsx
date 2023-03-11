import { Box, Divider, Text } from "@chakra-ui/react";
import BreadcrumbPaths from "./BreadcrumbPath";
import FileTree from "./FileTree";
import FolderView from "./FolderView";
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { getallsession } from "@/components/config/backendLinks";
import axios from "axios";
import { UserContext } from "@/context/Usercontext";
import { ProjectContext } from "@/context/ProjectWorkingContext";
const Explorer = () => {
  const [UserData, setUserData]: any = useContext(UserContext);
  const [ProjectData, setProjectData]: any = useContext(ProjectContext);
  
  

  const { isLoading, error, data }: any = useQuery(
    "repoData",
    () =>
      axios
        .post(getallsession, {
          tokenId: UserData.token,
          userId: UserData.uuid,
          projectId: ProjectData._id,
        })
        .then((res) => {
          if (res.data.status != 400) {
            setProjectData({ ...ProjectData, sessions: res.data });
            return res.data;
            
          }
        }),
    { refetchInterval: 5000 }
  );

  return (
    <Box border={"1px solid gray"} borderRadius="5" my="3" p="6">
      
      <BreadcrumbPaths />
      <Box mt="6" display={"flex"}>
        <Box flex={"1"} display="flex" justifyContent={"space-between"}>
          <FileTree />
          <Divider orientation="vertical" />
        </Box>
        <Box flex={"6"}>
          {isLoading ? <Text>Loading ...</Text> : <FolderView />}
        </Box>
      </Box>
    </Box>
  );
};

export default Explorer;
