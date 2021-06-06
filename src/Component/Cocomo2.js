import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
const Cocomo2 = () => {
  const [cocomo2, setCocomo2] = useState({
    reuse: "",
    screen: "",
    report: "",
    view: "",
    section: "",
    serverScreens: "",
    clientScreens: "",
    serverReports: "",
    clientReports: "",
    experience: "",
  });
  const [error, setError] = useState({
    reuseValid: "",
    productivityValid: "",
  });
  const [effort, setEffort] = useState("");
  const inputEvent = (e) => {
    const { name, value } = e.target;

    setCocomo2((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const productivity = () => {
    if (cocomo2.experience === "very-low") {
      return 4;
    } else if (cocomo2.experience === "low") {
      return 7;
    } else if (cocomo2.experience === "nominal") {
      return 13;
    } else if (cocomo2.experience === "high") {
      return 25;
    } else if (cocomo2.experience === "very-high") {
      return 50;
    } else {
      return false;
    }
  };
  const reuseValid = () => {
    if (cocomo2.reuse > 100) {
      return false;
    } else {
      return true;
    }
  };
  const screenComplexity = () => {
    if (cocomo2.view < 3) {
      if (cocomo2.serverScreens < 2 && cocomo2.clientScreens < 3) {
        return "Simple";
      } else if (cocomo2.serverScreens >= 2 || cocomo2.serverScreens <= 3) {
        if (cocomo2.clientScreens >= 3 || cocomo2.clientScreens <= 5)
          return "Simple";
      } else if (cocomo2.serverScreens > 3 && cocomo2.clientScreens > 5) {
        return "Medium";
      }
    } else if (cocomo2.view == 3 || cocomo2.view <= 7) {
      if (cocomo2.serverScreens < 2 && cocomo2.clientScreens < 3) {
        return "Simple";
      } else if (cocomo2.serverScreens >= 2 || cocomo2.serverScreens <= 3) {
        if (cocomo2.clientScreens >= 3 || cocomo2.clientScreens <= 5)
          return "Medium";
      } else if (cocomo2.serverScreens > 3 && cocomo2.clientScreens > 5) {
        return "Difficult";
      }
    } else if (cocomo2.view > 8) {
      if (cocomo2.serverScreens < 2 && cocomo2.clientScreens < 3) {
        return "Medium";
      } else if (cocomo2.serverScreens >= 2 || cocomo2.serverScreens <= 3) {
        if (cocomo2.clientScreens >= 3 || cocomo2.clientScreens <= 5)
          return "Difficult";
      } else if (cocomo2.serverScreens > 3 && cocomo2.clientScreens > 5) {
        return "Difficult";
      }
    }
  };
  const reportComplexity = () => {
    if (cocomo2.section == 0 || cocomo2.section == 1) {
      if (cocomo2.serverReports < 2 && cocomo2.clientReports < 3) {
        return "Simple";
      } else if (cocomo2.serverReports >= 2 || cocomo2.serverReports <= 3) {
        if (cocomo2.clientReports >= 3 || cocomo2.clientReports <= 5)
          return "Simple";
      } else if (cocomo2.serverReports > 3 && cocomo2.clientReports > 5) {
        return "Medium";
      }
    } else if (cocomo2.section == 2 || cocomo2.section == 3) {
      if (cocomo2.serverReports < 2 && cocomo2.clientReports < 3) {
        return "Simple";
      } else if (cocomo2.serverReports >= 2 || cocomo2.serverReports <= 3) {
        if (cocomo2.clientReports >= 3 || cocomo2.clientReports <= 5)
          return "Medium";
      } else if (cocomo2.serverReports > 3 && cocomo2.clientReports > 5) {
        return "Difficult";
      }
    } else if (cocomo2.section >= 4) {
      if (cocomo2.serverReports < 2 && cocomo2.clientReports < 3) {
        return "Medium";
      } else if (cocomo2.serverReports >= 2 || cocomo2.serverReports <= 3) {
        if (cocomo2.clientReports >= 3 || cocomo2.clientReports <= 5)
          return "Difficult";
      } else if (cocomo2.serverReports > 3 && cocomo2.clientReports > 5) {
        return "Difficult";
      }
    }
  };
  const screenComplexityWeight = () => {
    if (screenComplexity() == "Simple") {
      return 1;
    } else if (screenComplexity() == "Medium") {
      return 2;
    } else if (screenComplexity() == "Difficult") {
      return 3;
    } else {
      return false;
    }
  };
  const reportComplexityWeight = () => {
    if (reportComplexity() == "Simple") {
      return 2;
    } else if (reportComplexity() == "Medium") {
      return 5;
    } else if (reportComplexity() == "Difficult") {
      return 8;
    } else {
      return false;
    }
  };
  const objectPointCount = () => {
    if (reportComplexityWeight() && screenComplexityWeight()) {
      let objectPoint =
        cocomo2.report * reportComplexityWeight() +
        cocomo2.screen * screenComplexityWeight();
      return objectPoint;
    } else {
      return false;
    }
  };
  const calculateNOP = () => {
    let NOP = (objectPointCount() * (100 - cocomo2.reuse)) / 100;

    return NOP;
  };

  console.log(calculateNOP());

  const effortSubmit = (e) => {
    e.preventDefault();

    if (reuseValid() && productivity()) {
      setEffort(calculateNOP() / productivity());
      setError({
        reuseValid: "",
        productivityValid: "",
      });
    } else if (!productivity()) {
      setEffort("-");
      setError({
        reuseValid: "",
        productivityValid: "Please determine developer's experience",
      });
    } else {
      setEffort("-");
      setError({
        reuseValid: "Reuse Percentage should not be greater than 100",
        productivityValid: "",
      });
    }
  };
  return (
    <>
      <div className="cocomo2">
        <Container>
          <Row>
            {/* <Col md={3}></Col> */}
            <Col md={12}>
              <form onSubmit={effortSubmit}>
                <h1>Constructive Cost Model 2</h1>
                <div className="form__group__wrapper">
                  <div className="form__group">
                    <label>%Reuse</label>
                    <input
                      type="number"
                      name="reuse"
                      onChange={inputEvent}
                      value={cocomo2.reuse}
                      placeholder="%reuse..."
                      required
                    />
                  </div>
                  <div className="form__group">
                    <label>Developer's Experience?</label>
                    <div className="exp_radio">
                      <div className="exp_radio_wrapper">
                        <div>
                          <input
                            type="radio"
                            name="experience"
                            value="very-low"
                            onChange={inputEvent}
                            checked={cocomo2.experience === "very-low"}
                          />{" "}
                          <label>Very Low</label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="experience"
                            value="low"
                            onChange={inputEvent}
                            checked={cocomo2.experience === "low"}
                          />{" "}
                          <label>Low</label>
                        </div>
                      </div>
                      <div className="exp_radio_wrapper">
                        <div>
                          <input
                            type="radio"
                            name="experience"
                            value="nominal"
                            onChange={inputEvent}
                            checked={cocomo2.experience === "nominal"}
                          />
                          <label>Nominal</label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="experience"
                            value="high"
                            onChange={inputEvent}
                            checked={cocomo2.experience === "high"}
                          />
                          <label>High</label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="experience"
                            value="very-high"
                            onChange={inputEvent}
                            checked={cocomo2.experience === "very-high"}
                          />
                          <label>Very High</label>
                        </div>
                      </div>
                      {/* <div className="exp_radio_wrapper">
                       
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="form__group__wrapper">
                  <div className="form__group">
                    <label>Number Of Screens</label>
                    <input
                      type="number"
                      name="screen"
                      onChange={inputEvent}
                      value={cocomo2.screen}
                      placeholder="screens..."
                      required
                    />
                  </div>
                  <div className="form__group">
                    <label>
                      Number Of Views <small>For Screens</small>
                    </label>
                    <input
                      type="number"
                      name="view"
                      onChange={inputEvent}
                      value={cocomo2.view}
                      placeholder="views..."
                      required
                    />
                  </div>
                  <div className="form__group">
                    <label>Number Of Reports</label>
                    <input
                      type="number"
                      name="report"
                      onChange={inputEvent}
                      value={cocomo2.report}
                      placeholder="reports..."
                      required
                    />
                  </div>
                  <div className="form__group">
                    <label>
                      Number Of Sections <small>For Reports</small>
                    </label>
                    <input
                      type="number"
                      name="section"
                      onChange={inputEvent}
                      value={cocomo2.section}
                      placeholder="sections..."
                      required
                    />
                  </div>
                </div>
                <div className="form__group__wrapper">
                  <div className="form__group">
                    <label>
                      Server DataTables <small>For Screens</small>
                    </label>
                    <input
                      type="number"
                      name="serverScreens"
                      onChange={inputEvent}
                      value={cocomo2.serverScreens}
                      placeholder="datatables for servers..."
                      required
                    />
                  </div>
                  <div className="form__group">
                    <label>
                      Client DataTables <small>For Screens</small>
                    </label>
                    <input
                      type="number"
                      name="clientScreens"
                      onChange={inputEvent}
                      value={cocomo2.clientScreens}
                      placeholder="datatables for clients..."
                      required
                    />
                  </div>

                  <div className="form__group">
                    <label>
                      Server DataTables <small>For Reports</small>
                    </label>
                    <input
                      type="number"
                      name="serverReports"
                      onChange={inputEvent}
                      value={cocomo2.serverReports}
                      placeholder="datatables for servers..."
                      required
                    />
                  </div>
                  <div className="form__group">
                    <label>
                      Client DataTables <small>For Reports</small>
                    </label>
                    <input
                      type="number"
                      name="clientReports"
                      onChange={inputEvent}
                      value={cocomo2.clientReports}
                      placeholder="datatables for clients..."
                      required
                    />
                  </div>
                </div>

                <div className="cocomo2__answer">
                  <button type="submit">Calulate Effort</button>
                  <h2>Effort : {effort || "-"} Persons-month</h2>
                  {error.reuseValid ? (
                    <p className="error">{error.reuseValid}</p>
                  ) : null}
                  {error.productivityValid ? (
                    <p className="error">{error.productivityValid}</p>
                  ) : null}
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Cocomo2;
