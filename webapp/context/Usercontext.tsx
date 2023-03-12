import { getToken } from "@/components/logic/cookie";
import { Text } from "@chakra-ui/react";
import { createContext, useState,useEffect } from "react";

export const UserContext = createContext({});

export const UserContextProvider = (props: any) => {
  const [UserData, setUserData] = useState();

  useEffect(() => {
    setUserData(getToken())
  },[])

  return (
    <UserContext.Provider value={[UserData, setUserData]}>
        <Text>Something {JSON.stringify(UserData)}</Text>
      {props.children}
    </UserContext.Provider>
  );
};
