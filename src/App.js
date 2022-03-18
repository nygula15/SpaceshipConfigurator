import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function App() {

  const [color1, setColor] = useState(0)
  const [power1, setPower] = useState(0)
  const [warp1, setWarp] = useState(0)
  const [option1, setOption] = useState(0)

  const colorValue = [0, 100, 100];
  const powerValue = [0, 200, 500];
  const warpValue = [0, 1000];
  const optionValue = [0, 100, 500];

  return (
    <div className="App">
      <div className="Desktop">
      <Container className="Container">

          <Col align="center">
            <div>Spaceship configurator</div>
          </Col>

        <Row>
          <Col xs={8}>
            <Row>
              <div>Select color:</div>
              <Col xs={4}>
                <div class="btn" onClick={() => setColor(colorValue[0])} className="buttonClick Short">
                  <div className="rectangle" style={{background: '#ffffff'}}> </div>
                  <div>+{colorValue[0]}€</div>
                  <div>Snow</div>
                </div>
              </Col>
              <Col xs={4}>
                <div class="btn" onClick={() => setColor(colorValue[1])} className="buttonClick Short" >
                  <div className="rectangle" style={{background: "#FF7A00"}}> </div>
                  <div>+{colorValue[1]}€</div>
                  <div>Volcano</div>
                </div>
              </Col>
              <Col xs={4}>
                <div class="btn" onClick={() => setColor(colorValue[2])} className="buttonClick Short">
                  <div className="rectangle" style={{background: "#6BE4FF"}}> </div>
                  <div>+{colorValue[2]}€</div>
                  <div>Sky</div>
                </div>
              </Col>
            </Row>
            <Row>
              <div>Select power:</div>
              <Col xs={4}>
                <div class="btn" onClick={() => setPower(powerValue[0])} className="buttonClick Short">
                  <div>100 MW</div>
                  +{powerValue[0]}€
                </div>
              </Col>
              <Col xs={4}>
                <div class="btn" onClick={() => setPower(powerValue[1])} className="buttonClick Short">
                  <div>150 MW</div>
                  +{powerValue[1]}€
                </div>
              </Col>
              <Col xs={4}>
                <div class="btn" onClick={() => setPower(powerValue[2])} className="buttonClick Short">
                  <div>200 MW</div>
                  +{powerValue[2]}€
                </div>
              </Col>
            </Row>
            <Row>
              <div>Warp Drive:</div>
              <Col xs={4}>
                <div class="btn" onClick={() => setWarp(warpValue[0])} className="buttonClick Short">
                  <div>NO</div>
                  +{warpValue[0]}€
                </div>
              </Col>
              <Col xs={4}>
                <div class="btn" onClick={() => setWarp(warpValue[1])} className="buttonClick Short">
                  <div>YES</div>
                  +{warpValue[1]}€
                </div>
              </Col>
            </Row>
            <Row>
              <div>Select option package:</div>
              <Col xs={4}>
                <div class="btn" onClick={() => setOption(optionValue[0])} className="buttonClick">
                  <div>Basic</div>
                  <span>+{optionValue[0]}€</span>
                  <div className="Bottom">sdfghj</div>
                </div>
                
              </Col>
              <Col xs={4}>
                <div class="btn" onClick={() => setOption(optionValue[1])} className="buttonClick">
                  <div>Sport</div>
                  <span>+{optionValue[1]}€</span>
                </div>
              </Col>
              <Col xs={4}>
                <div class="btn" onClick={() => setOption(optionValue[2])} className="buttonClick">
                  <div>Lux</div>
                  <span>+{optionValue[2]}€</span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={4}>
            <br/>
            <div className="buttonClick Right">
              <Row>
                <Col xs={8}><div>Base price:</div></Col>
                <Col xs={4}><div>1000€</div></Col>
                <Col xs={8}><div>Color:</div></Col>
                <Col xs={4}><div>+{color1}€</div></Col>
                <Col xs={8}><div>Power:</div></Col>
                <Col xs={4}><div>+{power1}€</div></Col>
                <Col xs={8}><div>Warp drive:</div></Col>
                <Col xs={4}><div>+{warp1}€</div></Col>
                <Col xs={8}><div>Option package:</div></Col>
                <Col xs={4}><div>+{option1}€</div></Col>
                <hr style={{"border": "1px solid #7BF762"}}/>
                <Col xs={8}><div>Total:</div></Col>
                <Col xs={4}>
                  <div>{color1 + power1 + warp1 + option1 + 1000}€</div>
                </Col>
              </Row>              
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default App;
