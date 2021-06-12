import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
const UCP = () => {
  const [UUCW, setUUCW] = useState({
    simpleUUCW: "",
    averageUUCW: "",
    complexUUCW: "",
  });
  const [UAW, setUAW] = useState({
    simpleUAW: "",
    averageUAW: "",
    complexUAW: "",
  });
  const [technicalComplexityFactors, setTechnicalComplexityFactors] = useState({
    T1: "",
    T2: "",
    T3: "",
    T4: "",
    T5: "",
    T6: "",
    T7: "",
    T8: "",
    T9: "",
    T10: "",
    T11: "",
    T12: "",
    T13: "",
  });
  const [
    technicalComplexityFactorsImpact,
    setTechnicalComplexityFactorsImpact,
  ] = useState({
    Impact_T1: "",
    Impact_T2: "",
    Impact_T3: "",
    Impact_T4: "",
    Impact_T5: "",
    Impact_T6: "",
    Impact_T7: "",
    Impact_T8: "",
    Impact_T9: "",
    Impact_T10: "",
    Impact_T11: "",
    Impact_T12: "",
    Impact_T13: "",
  });

  const [environmentalComplexityFactors, setEnvironmentalComplexityFactors] =
    useState({
      F1: "",
      F2: "",
      F3: "",
      F4: "",
      F5: "",
      F6: "",
      F7: "",
      F8: "",
    });
  const [
    environmentalComplexityFactorsImpact,
    setEnvironmentalComplexityFactorsImpact,
  ] = useState({
    Impact_F1: "",
    Impact_F2: "",
    Impact_F3: "",
    Impact_F4: "",
    Impact_F5: "",
    Impact_F6: "",
    Impact_F7: "",
    Impact_F8: "",
  });
  const [technicalError, setTechnicalError] = useState("");
  const [environmentalError, setEnvironmentalError] = useState("");
  const [effort, setEffort] = useState("");

  const technicalValidation = () => {
    if (
      technicalComplexityFactors.T1 <= 5 &&
      technicalComplexityFactors.T2 <= 5 &&
      technicalComplexityFactors.T3 <= 5 &&
      technicalComplexityFactors.T4 <= 5 &&
      technicalComplexityFactors.T5 <= 5 &&
      technicalComplexityFactors.T6 <= 5 &&
      technicalComplexityFactors.T7 <= 5 &&
      technicalComplexityFactors.T8 <= 5 &&
      technicalComplexityFactors.T9 <= 5 &&
      technicalComplexityFactors.T10 <= 5 &&
      technicalComplexityFactors.T11 <= 5 &&
      technicalComplexityFactors.T12 <= 5 &&
      technicalComplexityFactors.T13 <= 5
    ) {
      setTechnicalError("");
      return true;
    } else {
      setTechnicalError("Rated value cannot be greater than 5");

      return false;
    }
  };
  const environmentalValidation = () => {
    if (
      environmentalComplexityFactors.F1 <= 5 &&
      environmentalComplexityFactors.F2 <= 5 &&
      environmentalComplexityFactors.F3 <= 5 &&
      environmentalComplexityFactors.F4 <= 5 &&
      environmentalComplexityFactors.F5 <= 5 &&
      environmentalComplexityFactors.F6 <= 5 &&
      environmentalComplexityFactors.F7 <= 5 &&
      environmentalComplexityFactors.F8 <= 5
    ) {
      setEnvironmentalError("");
      return true;
    } else {
      setEnvironmentalError("Rated value cannot be greater than 5");

      return false;
    }
  };
  const inputEvent = (e) => {
    const { name, value } = e.target;

    setUUCW((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
    setUAW((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
    setTechnicalComplexityFactors((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
    setEnvironmentalComplexityFactors((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const unadjustedUseCaseWeight = () => {
    let result =
      UUCW.simpleUUCW * 5 + UUCW.averageUUCW * 10 + UUCW.complexUUCW * 15;
    return result;
  };
  const unadjustedActorWeight = () => {
    let result = UAW.simpleUAW * 1 + UAW.averageUAW * 2 + UAW.complexUAW * 3;
    return result;
  };
  const TFactor = () => {
    setTechnicalComplexityFactorsImpact({
      Impact_T1: 2 * technicalComplexityFactors.T1,
      Impact_T2: 1 * technicalComplexityFactors.T2,
      Impact_T3: 1 * technicalComplexityFactors.T3,
      Impact_T4: 1 * technicalComplexityFactors.T4,
      Impact_T5: 1 * technicalComplexityFactors.T5,
      Impact_T6: 0.5 * technicalComplexityFactors.T6,
      Impact_T7: 0.5 * technicalComplexityFactors.T7,
      Impact_T8: 2 * technicalComplexityFactors.T8,
      Impact_T9: 1 * technicalComplexityFactors.T9,
      Impact_T10: 1 * technicalComplexityFactors.T10,
      Impact_T11: 1 * technicalComplexityFactors.T11,
      Impact_T12: 1 * technicalComplexityFactors.T12,
      Impact_T13: 1 * technicalComplexityFactors.T13,
    });
    let totalTFactor =
      technicalComplexityFactorsImpact.Impact_T1 +
      technicalComplexityFactorsImpact.Impact_T2 +
      technicalComplexityFactorsImpact.Impact_T3 +
      technicalComplexityFactorsImpact.Impact_T4 +
      technicalComplexityFactorsImpact.Impact_T5 +
      technicalComplexityFactorsImpact.Impact_T6 +
      technicalComplexityFactorsImpact.Impact_T7 +
      technicalComplexityFactorsImpact.Impact_T8 +
      technicalComplexityFactorsImpact.Impact_T9 +
      technicalComplexityFactorsImpact.Impact_T10 +
      technicalComplexityFactorsImpact.Impact_T11 +
      technicalComplexityFactorsImpact.Impact_T12 +
      technicalComplexityFactorsImpact.Impact_T13;
    return totalTFactor;
  };
  const total_Complexity_Factor = () => {
    let result = 0.6 + TFactor() / 100;
    return result;
  };

  const EFactor = () => {
    setEnvironmentalComplexityFactorsImpact({
      Impact_F1: 1.5 * environmentalComplexityFactors.F1,
      Impact_F2: 0.5 * environmentalComplexityFactors.F2,
      Impact_F3: 1 * environmentalComplexityFactors.F3,
      Impact_F4: 0.5 * environmentalComplexityFactors.F4,
      Impact_F5: 1 * environmentalComplexityFactors.F5,
      Impact_F6: 2 * environmentalComplexityFactors.F6,
      Impact_F7: -1 * environmentalComplexityFactors.F7,
      Impact_F8: -1 * environmentalComplexityFactors.F8,
    });
    let totalEFactor =
      environmentalComplexityFactorsImpact.Impact_F1 +
      environmentalComplexityFactorsImpact.Impact_F2 +
      environmentalComplexityFactorsImpact.Impact_F3 +
      environmentalComplexityFactorsImpact.Impact_F4 +
      environmentalComplexityFactorsImpact.Impact_F5 +
      environmentalComplexityFactorsImpact.Impact_F6 +
      environmentalComplexityFactorsImpact.Impact_F7 +
      environmentalComplexityFactorsImpact.Impact_F8;
    return totalEFactor;
  };
  const total_Effort_Complexity_Factor = () => {
    let result = 1.4 + -0.03 * EFactor();
    return result;
  };
  const unadjustUseCasePoints = () => {
    let result = unadjustedUseCaseWeight() + unadjustedActorWeight();
    return result;
  };
  const effortSubmit = (e) => {
    e.preventDefault();
    if (environmentalValidation() && technicalValidation()) {
      setEffort(
        unadjustUseCasePoints() *
          total_Complexity_Factor() *
          total_Effort_Complexity_Factor()
      );
    }
  };
  return (
    <>
      <div className="ucp">
        <Container>
          <Row>
            <Col md={12}>
              <form onSubmit={effortSubmit}>
                <h1>Use-Case Points</h1>
                <div className="form__group__wrapper">
                  <div className="Unadjusted_UCP">
                    <div className="form__group">
                      <h5>Unadjusted Use-Case Weight</h5>
                      <label>Total Use Case Complexity For:</label>
                      <div className="UUCW__Use_Case_Complexity">
                        <input
                          type="number"
                          name="simpleUUCW"
                          onChange={inputEvent}
                          value={UUCW.simpleUUCW}
                          placeholder="Simple..."
                        />
                        <input
                          type="number"
                          name="averageUUCW"
                          onChange={inputEvent}
                          value={UUCW.averageUUCW}
                          placeholder="Average..."
                        />
                        <input
                          type="number"
                          name="complexUUCW"
                          onChange={inputEvent}
                          value={UUCW.complexUUCW}
                          placeholder="Complex..."
                        />
                      </div>
                    </div>

                    <div className="form__group ">
                      <h5>Unadjusted Actor Weight</h5>
                      <label>Total Use Case Complexity For:</label>
                      <div className="UUCW__Use_Case_Complexity">
                        <input
                          type="number"
                          name="simpleUAW"
                          onChange={inputEvent}
                          value={UAW.simpleUAW}
                          placeholder="Simple..."
                        />
                        <input
                          type="number"
                          name="averageUAW"
                          onChange={inputEvent}
                          value={UAW.averageUAW}
                          placeholder="Average..."
                        />
                        <input
                          type="number"
                          name="complexUAW"
                          onChange={inputEvent}
                          value={UAW.complexUAW}
                          placeholder="Complex..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form__group complexityFactors">
                    <h5>Technical Complexity</h5>
                    <label>Technical Complexity Factor Rated Value:</label>
                    <div className="UUCW__Use_Case_Complexity">
                      <input
                        type="number"
                        name="T1"
                        onChange={inputEvent}
                        value={environmentalComplexityFactors.T1}
                        placeholder="T1..."
                      />
                      <input
                        type="number"
                        name="T2"
                        onChange={inputEvent}
                        value={technicalComplexityFactors.T2}
                        placeholder="T2..."
                      />
                      <input
                        type="number"
                        name="T3"
                        onChange={inputEvent}
                        value={technicalComplexityFactors.T3}
                        placeholder="T3..."
                      />
                      <input
                        type="number"
                        name="T4"
                        onChange={inputEvent}
                        value={technicalComplexityFactors.T4}
                        placeholder="T4..."
                      />
                      <input
                        type="number"
                        name="T5"
                        onChange={inputEvent}
                        value={technicalComplexityFactors.T5}
                        placeholder="T5..."
                      />
                      <input
                        type="number"
                        name="T6"
                        onChange={inputEvent}
                        value={technicalComplexityFactors.T6}
                        placeholder="T6..."
                      />
                      <input
                        type="number"
                        name="T7"
                        onChange={inputEvent}
                        value={technicalComplexityFactors.T7}
                        placeholder="T7..."
                      />
                      <input
                        type="number"
                        name="T8"
                        onChange={inputEvent}
                        value={technicalComplexityFactors.T8}
                        placeholder="T8..."
                      />
                      <input
                        type="number"
                        name="T9"
                        onChange={inputEvent}
                        value={technicalComplexityFactors.T9}
                        placeholder="T9..."
                      />
                      <input
                        type="number"
                        name="T10"
                        onChange={inputEvent}
                        value={technicalComplexityFactors.T10}
                        placeholder="T10..."
                      />
                      <input
                        type="number"
                        name="T11"
                        onChange={inputEvent}
                        value={technicalComplexityFactors.T11}
                        placeholder="T11..."
                      />
                      <input
                        type="number"
                        name="T12"
                        onChange={inputEvent}
                        value={technicalComplexityFactors.T12}
                        placeholder="T12..."
                      />
                      <input
                        type="number"
                        name="T13"
                        onChange={inputEvent}
                        value={technicalComplexityFactors.T13}
                        placeholder="T13..."
                      />
                    </div>
                  </div>

                  <div className="form__group complexityFactors">
                    <h5>Environmental Complexity</h5>
                    <label>Environmental Complexity Factor Rated Value:</label>
                    <div className="UUCW__Use_Case_Complexity">
                      <input
                        type="number"
                        name="F1"
                        onChange={inputEvent}
                        value={environmentalComplexityFactors.F1}
                        placeholder="F1..."
                      />
                      <input
                        type="number"
                        name="F2"
                        onChange={inputEvent}
                        value={environmentalComplexityFactors.F2}
                        placeholder="F2..."
                      />
                      <input
                        type="number"
                        name="F3"
                        onChange={inputEvent}
                        value={environmentalComplexityFactors.F3}
                        placeholder="F3..."
                      />
                      <input
                        type="number"
                        name="F4"
                        onChange={inputEvent}
                        value={environmentalComplexityFactors.F4}
                        placeholder="F4..."
                      />
                      <input
                        type="number"
                        name="F5"
                        onChange={inputEvent}
                        value={environmentalComplexityFactors.F5}
                        placeholder="F5..."
                      />
                      <input
                        type="number"
                        name="F6"
                        onChange={inputEvent}
                        value={environmentalComplexityFactors.F6}
                        placeholder="F6..."
                      />
                      <input
                        type="number"
                        name="F7"
                        onChange={inputEvent}
                        value={environmentalComplexityFactors.F7}
                        placeholder="F7..."
                      />
                      <input
                        type="number"
                        name="F8"
                        onChange={inputEvent}
                        value={environmentalComplexityFactors.F8}
                        placeholder="F8..."
                      />
                    </div>
                  </div>
                  <div className="ucp__answer">
                    <button type="submit">Calulate Effort</button>
                    <h2>Adjust UCP : {effort}</h2>
                    {/* {UUCPError ? <p className="error">{UUCPError}</p> : null}*/}
                    {technicalError ? (
                      <p className="error">{technicalError}</p>
                    ) : null}
                    {environmentalError ? (
                      <p className="error">{environmentalError}</p>
                    ) : null}
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default UCP;
