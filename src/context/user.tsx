import { createContext, useContext } from "react";
import { UserAttr } from "../services/common/types";

type UserContextState = {
  user: UserAttr["responseData"];
};

const UserContext = createContext<UserContextState | null>(null);

type UserProviderProps = {
  children?: React.ReactNode;
  user: UserAttr["responseData"];
};

const UserProvider = ({
  children,
  user,
}: UserProviderProps): React.ReactElement => (
  <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
);

const useUser = (): UserContextState => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

export { UserProvider, useUser };
export type { UserAttr };
