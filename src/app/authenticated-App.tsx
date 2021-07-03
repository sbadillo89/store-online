import Navbar from "../components/Navbar";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Products } from "../pages/products";
import { AboutUs } from "../pages/about-us";
import { UserAttr, UserProvider } from "../context/user";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity } },
});

type AuthenticatedAppProps = {
  token: string;
  user: UserAttr["responseData"];
};

function AuthenticatedApp({
  token,
  user,
}: AuthenticatedAppProps): React.ReactElement {
  return (
    <UserProvider user={user}>
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Navbar />
          <div id="content" className="flex h-full">
            <Route path="/" exact component={Home} />
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/about" component={AboutUs} />
          </div>
        </Switch>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </UserProvider>
  );
}

export default AuthenticatedApp;
