import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages";
import AllMoviesPage from "../pages/all-movies";
import DetailMoviePage from "../pages/detail-movie";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <AllMoviesPage />
        </Route>
        <Route path="/movie/:id" exact>
          <DetailMoviePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
