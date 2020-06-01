import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Body from "../Routes/Body";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Body} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = () => <Routes />;

export default AppRouter;
