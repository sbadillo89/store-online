import { Route, Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function UnauthenticatedApp(): React.ReactElement {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: Infinity } },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
export default UnauthenticatedApp;
