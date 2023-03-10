import { getToken } from "@/components/logic/cookie";
import { Text } from "@chakra-ui/react";
import { createContext, useState, useEffect } from "react";

export const ProjectContext = createContext({});

export const ProjectContextProvider = (props: any) => {
  const [ProjectData, setProjectData] = useState();

  return (
    <ProjectContext.Provider value={[ProjectData, setProjectData]}>
      <Text>Something {JSON.stringify(ProjectData)}</Text>
      {props.children}
    </ProjectContext.Provider>
  );
};
