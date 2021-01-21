import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Life from "../pages/life";
import Mode from "../pages/mode";
import MyTwoCents from "../pages/my-two-cents";
import People from "../pages/people";
import Places from "../pages/places";
import Quotes from "../pages/quotes";
import ErrorPage from "../pages/_error";

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/my-two-cents">
          <MyTwoCents />
        </Route>
        <Route path="/my-two-cents">
          <MyTwoCents />
        </Route>
        <Route path="/quotes">
          <Quotes />
        </Route>
        <Route path="/mode">
          <Mode />
        </Route>

        <Route path="/places">
          <Places />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/life">
          <Life />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}
