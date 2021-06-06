import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
const Organic = () => {
  let history = useHistory();
  const [organic, setOrganic] = useState({
    kloc: "",
  });
  const [result, setResult] = useState({
    PM: "",
    devTime: "",
  });
  const inputEvent = (e) => {
    const { name, value } = e.target;

    setOrganic((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const organicForm = (e) => {
    e.preventDefault();
    let loc = Math.pow(organic.kloc, 1.05);
    let pmResult = 2.4 * loc;

    let pm = Math.pow(pmResult, 0.38);
    let devResult = 2.5 * pm;

    setResult({
      PM: pmResult,
      devTime: devResult,
    });
  };
  return (
    <>
      <div className="organic">
        <Container>
          <Row>
            <Col md={3}>
              <div className="organic__head">
                <button
                  className="organic__head__button"
                  onClick={() => history.goBack()}
                >
                  <BiArrowBack />
                </button>
              </div>
            </Col>
            <Col md={9}>
              <div className="organic__head">
                <h1>Organic</h1>
                <form onSubmit={organicForm}>
                  <div className="form__group">
                    <label>KLOC For The Project</label>
                    <input
                      type="number"
                      value={organic.kloc}
                      onChange={inputEvent}
                      name="kloc"
                      required
                      placeholder="KLOC..."
                    />
                  </div>

                  <button type="submit">Calculate Effort</button>
                  <div className="organic__answers">
                    <h2>Persons-Month: {result.PM || "-"}</h2>
                    <h2>Development Time: {result.devTime || "-"}</h2>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Organic;
