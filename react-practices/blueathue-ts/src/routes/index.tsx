import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/home";
import ErrorPage from "../pages/_error";
import { PAGE_ROUTES } from "../utils/constants";

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        {PAGE_ROUTES.map(({ link, page: Page }, idx) => (
          <Route path={link} exact key={idx}>
            <Page />
          </Route>
        ))}

        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}
