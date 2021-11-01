import React from "react";
import { Route } from "react-router-dom";
import NavBar from "../NavBar";
import FilterTag from "../FilterTag";
import Loader from "../Loader";

const NavRoute = ({
  exact,
  path,
  component: Component,
  newsData = [],
  loading = false,
  disableFilterTag = false,
}) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        <div>
          <NavBar />
          {!disableFilterTag && <FilterTag />}
          {loading ? <Loader /> : <Component {...props} newsData={newsData} />}
        </div>
      )}
    />
  );
};

export default NavRoute;
