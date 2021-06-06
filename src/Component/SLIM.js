import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
const SLIM = () => {
  const [slim, setSlim] = useState({
    loc: "",
    t: "",
    C: "",
  });
  const [effort, setEffort] = useState("");
  const inputEvent = (e) => {
    const { name, value } = e.target;

    setSlim((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const effortSubmit = (e) => {
    e.preventDefault();

    let prod = slim.C;
    let dev = Math.pow(slim.t, 4 / 3);
    let size = slim.loc;

    let prodDev = prod * dev;
    let effortEst = (size / prodDev) * 3;

    setEffort(effortEst);
  };
  return (
    <>
      <div className="slim">
        <Container>
          <Row>
            <Col md={3}></Col>
            <Col md={9}>
              <form onSubmit={effortSubmit}>
                <h1>S L I M</h1>
                <div className="form__group">
                  <label>Line Of Codes</label>
                  <input
                    type="number"
                    name="loc"
                    onChange={inputEvent}
                    value={slim.loc}
                    placeholder="Size..."
                    required
                  />
                </div>
                <div className="form__group">
                  <label>t</label>
                  <input
                    type="number"
                    name="t"
                    onChange={inputEvent}
                    value={slim.t}
                    placeholder="Time..."
                    required
                  />
                </div>
                <div className="form__group">
                  <label>C</label>
                  <input
                    type="number"
                    name="C"
                    onChange={inputEvent}
                    value={slim.C}
                    placeholder="Productivity..."
                    required
                  />
                </div>
                <button type="submit">Calulate Effort</button>
                <div className="slim__answer">
                  <h2>Total Life Cycle Effort : {effort || "-"}</h2>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default SLIM;
