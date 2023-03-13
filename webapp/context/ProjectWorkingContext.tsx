import { getToken } from "@/components/logic/cookie";
import { Text } from "@chakra-ui/react";
import { createContext, useState, useEffect } from "react";

export const ProjectContext = createContext({});

export const ProjectContextProvider = (props: any) => {
  const [ProjectData, setProjectData] = useState({
    _id: undefined,
    title: undefined,
    description: undefined,
    body: undefined,
    createdAt: "",
    createdBy: "",
    lastOnline: "",
    share: [""],
    __v: 0,
    sessions:false  
  });

  return (
    <ProjectContext.Provider value={[ProjectData, setProjectData]}>
      {/* <Text>Something {JSON.stringify(ProjectData)}</Text> */}
      {props.children}
    </ProjectContext.Provider>
  );
};
