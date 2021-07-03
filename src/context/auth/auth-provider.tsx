import { UserAttr } from "../../services/common/types";
import { createContext, useContext, useState } from "react";

type AuthContextState = {
  data: UserAttr["responseData"] | null;
  setData: (data: UserAttr["responseData"]) => void;
};

const AuthContext = createContext<AuthContextState | null>(null);
if (process.env.NODE_ENV === "development") {
  AuthContext.displayName = "AuthContext";
}

type AuthProviderProps = {
  children?: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps): React.ReactElement => {
  const [data, setData] = useState<UserAttr["responseData"]>({
    userId: "",
    email: "",
    expireDate: "",
    isAdmin: false,
    token: "",
    userName: "",
  });

  return (
    <AuthContext.Provider value={{ data, setData }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextState => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be use within an AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };
