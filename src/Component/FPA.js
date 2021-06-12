import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const FPA = () => {
  const [UFP, setUFP] = useState({
    EISimple:  0,
    EIAverage:  0,
    EIComplex:  0,
    EOSimple:  0,
    EOAverage:  0,
    EOComplex:  0,
    EQSimple:  0,
    EQAverage:  0,
    EQComplex:  0,
    ILFSimple:  0,
    ILFAverage:  0,
    ILFComplex:  0,
    EIFSimple:  0,
    EIFAverage:  0,
    EIFComplex:  0,
  });
  const UFPResult = () => {
      let EI_Count = (UFP.EISimple*3)+(UFP.EIAverage*4)+ (UFP.EIComplex*6)
      let EO_Count = (UFP.EOSimple*4)+(UFP.EOAverage*5)+ (UFP.EOComplex*7)
      let EQ_Count = (UFP.EQSimple*3)+(UFP.EQAverage*4)+ (UFP.EQComplex*6)
      let ILF_Count = (UFP.ILFSimple*7)+(UFP.ILFAverage*10)+ (UFP.ILFComplex*15)
      let EIF_Count = (UFP.EIFSimple*5)+(UFP.EIFAverage*7)+ (UFP.EIFComplex*10)

      let result = EI_Count + EO_Count + EQ_Count + ILF_Count + EIF_Count

      return result;
  }
  const [CAF, setCAF] = useState({
    noInfluence: 0,
    incidental: 0,
    moderate: 0,
    average: 0,
    significant: 0,
    essential: 0,
  });
  const CAFResult = () => {
    let result = (CAF.noInfluence*0)+(CAF.incidental*1)+ (CAF.moderate*2) + (CAF.average*3) + (CAF.significant*4)  + (CAF.essential*5)

    let total__CAF = 0.65 + (0.01 * result); 

    return total__CAF;
}
  const [error, setError] = useState({
    CAFError: "",
  });
  const validCaf = () => {
    let result =
    parseInt(CAF.noInfluence) +
    parseInt(CAF.incidental) +
        parseInt(CAF.moderate) +
            parseInt(CAF.average) +
                parseInt(CAF.significant) +
                    parseInt(CAF.essential);
    console.log(result)
    if (result === 14) {
      setError({ CAFError: "" });
      return true;
    } else {
      setError({ CAFError: "Efi can not be less than or greater than 14" });
      return false;
    }
  };
  const inputEvent = (e) => {
    const { name, value } = e.target;

    setUFP((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
    setCAF((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const [effort, setEffort] = useState("");

  const effortSubmit = (e) => {
    e.preventDefault();
    if (validCaf()){
        setError({CAFError:""})
        setEffort(CAFResult() * UFPResult())  
    }
  };
  return (
    <>
      <div className="FPA">
        <Container>
          <Row>
            <Col md={12}>
              <form onSubmit={effortSubmit}>
                <h1>Functional Point Analysis</h1>
                <div className="form__group__wrapper">
                  <div className="form__group">
                    <h5>Unadjusted Functional Point</h5>
                    <small>
                      *Write how many measurements are simple, average or
                      complex. You can insert 0 if a certain
                      measurement does not have a specific simple, average or
                      complex weighing factor :)
                    </small>
                    <div className="Unadjusted__FP">
                   
                      <div>
                     
                        <div className="weighing__factors">
                            {/*External Inputs */}
                            
                          <div>
                              
                            <input
                              type="number"
                              name="EISimple"
                              onChange={inputEvent}
                              value={UFP.EISimple}
                              placeholder="EI..."
                              required
                            />
                            <p>* Simple(EI)</p>
                          </div>
                          <div>
                            <input
                              type="number"
                              name="EIAverage"
                              onChange={inputEvent}
                              value={UFP.EIAverage}
                              placeholder="EI..."
                              required
                            />
                            <p>* Average(EI)</p>
                          </div>
                          <div>
                            <input
                              type="number"
                              name="EIComplex"
                              onChange={inputEvent}
                              value={UFP.EIComplex}
                              placeholder="EI..."
                              required
                            />
                            <p>* Complex(EI)</p>
                          </div>
                        </div>
                        {/*External Outputs */}
                        <div className="weighing__factors">
                          <div>
                            <input
                              type="number"
                              name="EOSimple"
                              onChange={inputEvent}
                              value={UFP.EOSimple}
                              placeholder="EO..."
                              required
                            />
                            <p>* Simple(EO)</p>
                          </div>
                          <div>
                            <input
                              type="number"
                              name="EOAverage"
                              onChange={inputEvent}
                              value={UFP.EOAverage}
                              placeholder="EO..."
                              required
                            />
                            <p>* Average(EO)</p>
                          </div>
                          <div>
                            <input
                              type="number"
                              name="EOComplex"
                              onChange={inputEvent}
                              value={UFP.EOComplex}
                              placeholder="EO..."
                              required
                            />
                            <p>* Complex(EO)</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="weighing__factors">
                          <div>
                            <input
                              type="number"
                              name="EQSimple"
                              onChange={inputEvent}
                              value={UFP.EQSimple}
                              placeholder="EQ..."
                              required
                            />
                            <p>* Simple(EQ)</p>
                          </div>
                          <div>
                            <input
                              type="number"
                              name="EQAverage"
                              onChange={inputEvent}
                              value={UFP.EQAverage}
                              placeholder="EQ..."
                              required
                            />
                            <p>* Average(EQ)</p>
                          </div>
                          <div>
                            <input
                              type="number"
                              name="EQComplex"
                              onChange={inputEvent}
                              value={UFP.EQComplex}
                              placeholder="EQ..."
                              required
                            />
                            <p>* Complex(EQ)</p>
                          </div>
                        </div>
                        <div className="weighing__factors">
                          <div>
                            <input
                              type="number"
                              name="ILFSimple"
                              onChange={inputEvent}
                              value={UFP.ILFSimple}
                              placeholder="ILF..."
                              required
                            />
                            <p>* Simple(ILF)</p>
                          </div>
                          <div>
                            <input
                              type="number"
                              name="ILFAverage"
                              onChange={inputEvent}
                              value={UFP.ILFAverage}
                              placeholder="ILF..."
                              required
                            />
                            <p>* Average(ILF)</p>
                          </div>
                          <div>
                            <input
                              type="number"
                              name="ILFComplex"
                              onChange={inputEvent}
                              value={UFP.ILFComplex}
                              placeholder="ILF..."
                              required
                            />
                            <p>* Complex(ILF)</p>
                          </div>
                        </div>
                      </div>

                      <div className="weighing__factors">
                        <div>
                          <input
                            type="number"
                            name="EIFSimple"
                            onChange={inputEvent}
                            value={UFP.EIFSimple}
                            placeholder="EIF..."
                            required
                          />
                          <p>* Simple(EIF)</p>
                        </div>
                        <div>
                          <input
                            type="number"
                            name="EIFAverage"
                            onChange={inputEvent}
                            value={UFP.EIFAverage}
                            placeholder="EIF..."
                            required
                          />
                          <p>* Average(EIF)</p>
                        </div>
                        <div>
                          <input
                            type="number"
                            name="EIFComplex"
                            onChange={inputEvent}
                            value={UFP.EIFComplex}
                            placeholder="EIF..."
                            required
                          />
                          <p>* Complex(EIF)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form__group__wrapper">
                  <div className="form__group">
                    <h5>Complexity Adjustment Factor</h5>
                    <div className="complexity_AF">
                        <div>
                            <input
                              type="number"
                              name="noInfluence"
                              onChange={inputEvent}
                              value={CAF.noInfluence}
                              placeholder="Efi..."
                              required
                            />
                            <p>* No-Influence</p>
                        </div>
                        <div>
                            <input
                              type="number"
                              name="incidental"
                              onChange={inputEvent}
                              value={CAF.incidental}
                              placeholder="Efi..."
                              required
                            />
                            <p>* Incidental</p>
                        </div>
                        <div>
                            <input
                              type="number"
                              name="moderate"
                              onChange={inputEvent}
                              value={CAF.moderate}
                              placeholder="Efi..."
                              required
                            />
                            <p>* Moderate</p>
                        </div>
                        <div>
                            <input
                              type="number"
                              name="average"
                              onChange={inputEvent}
                              value={CAF.average}
                              placeholder="Efi..."
                              required
                            />
                            <p>* Average</p>
                        </div>
                        <div>
                            <input
                              type="number"
                              name="significant"
                              onChange={inputEvent}
                              value={CAF.significant}
                              placeholder="Efi..."
                              required
                            />
                            <p>* Significant</p>
                        </div>
                        <div>
                            <input
                              type="number"
                              name="essential"
                              onChange={inputEvent}
                              value={CAF.essential}
                              placeholder="Efi..."
                              required
                            />
                            <p>* Essential</p>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="FPA__answer">
                  <button type="submit">Calulate Effort</button>
                  <h2>Functional Point : {effort}</h2>
                  {error.CAFError ? (
                    <p className="error">{error.CAFError}</p>
                  ) : null}
                  {/* {environmentalError ? (
                      <p className="error">{environmentalError}</p>
                    ) : null} */}
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default FPA;
