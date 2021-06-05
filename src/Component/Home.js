import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div id="text_div center_all">
        <div className="center_all">
          <h1 className="custom-subTitle">
            Welcome To Effort Estimation Bootcamp
          </h1>
          <p className="custom_subText">
            What would you want to start off with?
          </p>
          <div className="effort_est">
            <div className="effort_est_btn">
              <NavLink exact to="/fpa">
                FPA
              </NavLink>
              <NavLink exact to="/cocomo">
                COCOMO
              </NavLink>
            </div>
            <div className="effort_est_btn">
              <NavLink exact to="/cocomo-2">
                COCOMO 2
              </NavLink>
              <NavLink exact to="/slim">
                SLIM
              </NavLink>
            </div>
            <div className="effort_est_btn">
              <NavLink exact to="/ucp">
                UCP
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
