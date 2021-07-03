import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "../context/auth/auth-provider";
import AuthenticatedApp from "./authenticated-App";
import UnauthenticatedApp from "./unauthenticated-App";

function App() {
  const { data } = useAuth();
  return (
    <Router>
      {data?.token ? (
        <>
          <AuthenticatedApp token={data.token} user={data} />
        </>
      ) : (
        <UnauthenticatedApp />
      )}
    </Router>
  );
}

export default App;
