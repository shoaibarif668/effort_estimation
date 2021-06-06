import React,{useState} from "react";
import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
const Embedded = () => {
  let history = useHistory();
  const [embedded, setEmbedded] = useState({
    kloc: "",
  });
  const [result, setResult] = useState({
    PM: "",
    devTime: "",
  });
  const inputEvent = (e) => {
    const { name, value } = e.target;

    setEmbedded((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const embeddedForm = (e) => {
    e.preventDefault();
    let loc = Math.pow(embedded.kloc, 1.20);
    let pmResult = 3.6 * loc;

    let pm = Math.pow(pmResult, 0.32);
    let devResult = 2.5 * pm;

    setResult({
      PM: pmResult,
      devTime: devResult,
    });
  };
  return (
    <>
      <div className="embedded">
      <Container>
          <Row>
            <Col md={3} >
              <div className="embedded__head">
                <button className="embedded__head_button" onClick={() => history.goBack()}>
                  <BiArrowBack />
                </button>
              </div>
            </Col>
            <Col md={9}>
              <div className="embedded__head">
              <h1>Embedded</h1>
              <form onSubmit={embeddedForm}>
                  <div className="form__group">
                    <label>KLOC For The Project</label>
                    <input
                      type="number"
                      value={embedded.kloc}
                      onChange={inputEvent}
                      name="kloc"
                      required
                      placeholder="KLOC..."
                    />
                  </div>

                  <button type="submit">Calculate Effort</button>
                  <div className="embedded__answers">
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
export default Embedded;
