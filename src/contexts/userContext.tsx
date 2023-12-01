import { createContext, useState } from "react";

//tipagem
interface UserContextProps {
  nome: string;
  loginName: string;
  save: (user: string) => void;
}

//contexto
export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

//provider - segurança
export default function UserContextProvider({ children }: any) {
  const [loginName, setLoginName] = useState<string>("");

  const contextValues: UserContextProps = {
    nome: "Felipão",
    loginName: loginName,
    save: saveLoginUserToCache,
  };

  function saveLoginUserToCache(user: string) {
    console.log(user);
    if (user !== "") {
      setLoginName(user);
    }
  }

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
}
