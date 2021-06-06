import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
const Semi_Detached = () => {
  let history = useHistory();
  const [detached, setDetached] = useState({
    kloc: "",
  });
  const [result, setResult] = useState({
    PM: "",
    devTime: "",
  });
  const inputEvent = (e) => {
    const { name, value } = e.target;

    setDetached((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const detachedForm = (e) => {
    e.preventDefault();
    let loc = Math.pow(detached.kloc, 1.12);
    let pmResult = 3 * loc;

    let pm = Math.pow(pmResult, 0.35);
    let devResult = 2.5 * pm;

    setResult({
      PM: pmResult,
      devTime: devResult,
    });
  };
  return (
    <>
      <div className="semi__detached">
        <Container>
          <Row>
            <Col md={3}>
              <div className="detached__head">
                <button
                  className="detached__head__button"
                  onClick={() => history.goBack()}
                >
                  <BiArrowBack />
                </button>
              </div>
            </Col>
            <Col md={9}>
              <div className="detached__head">
                <h1>Semi Detached</h1>
                <form onSubmit={detachedForm}>
                  <div className="form__group">
                    <label>KLOC For The Project</label>
                    <input
                      type="number"
                      value={detached.kloc}
                      onChange={inputEvent}
                      name="kloc"
                      required
                      placeholder="KLOC..."
                    />
                  </div>

                  <button type="submit">Calculate Effort</button>
                  <div className="detached__answers">
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
export default Semi_Detached;
