import React from "react";
import { NavLink } from "react-router-dom";
const Cocomo = ({ match }) => {
  return (
    <>
      <div className="cocomo">
        <h1>Constructive Cost Model</h1>

        <div className="cocomo_submenu">
          <NavLink
            exact
            activeClassName="active_cocomo"
            to={`${match.url}/organic`}
          >
            Organic
          </NavLink>
          <NavLink
            exact
            activeClassName="active_cocomo"
            to={`${match.url}/semi-detached`}
          >
            Semi Detached
          </NavLink>
          <NavLink
            exact
            activeClassName="active_cocomo"
            to={`${match.url}/embedded`}
          >
            Embedded
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Cocomo;
