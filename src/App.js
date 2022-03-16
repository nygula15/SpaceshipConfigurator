import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(4)

  function decrementCount() {
    setCount(count - 1)
  }

  function incrementCount() {
    setCount(count + 1)
  }

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
      <div class="container">
        <div class="row">
        
          <div class="col">
            <div className="header1">Spaceship configurator</div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="row">
              <div>Select color:</div>
              <div class="col">
                <div class="btn" onClick={() => setColor(colorValue[0])}>
                  <div className="colorCard">
                    <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="64" height="32" rx="8" fill="white"/>
                    </svg>
                    <div>+{colorValue[0]}€</div>
                    White
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="btn" onClick={() => setColor(colorValue[1])}>
                  <div className="colorCard">
                    <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="64" height="32" rx="8" fill="#FF7A00"/>
                    </svg>
                    <div>+{colorValue[1]}€</div>
                    Volcano
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="btn" onClick={() => setColor(colorValue[2])}>
                  <div className="colorCard">
                    <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="64" height="32" rx="8" fill="#6BE4FF"/>
                    </svg>
                    <div>+{colorValue[2]}€</div>
                    Sky
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div>Select power:</div>
              <div class="col">
                <div class="btn" onClick={() => setPower(powerValue[0])}>
                  <div className="powerWarp">
                    <div>100 MW</div>
                    +{powerValue[0]}€
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="btn" onClick={() => setPower(powerValue[1])}>
                  <div className="powerWarp">
                    <div>150 MW</div>
                    +{powerValue[1]}€
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="btn" onClick={() => setPower(powerValue[2])}>
                  <div className="powerWarp">
                    <div>200 MW</div>
                    +{powerValue[2]}€
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div>Warp Drive:</div>
              <div class="col-4">
                <div class="btn" onClick={() => setWarp(warpValue[0])}>
                  <div className="powerWarp">
                    <div>NO</div>
                    +{warpValue[0]}€
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="btn" onClick={() => setWarp(warpValue[1])}>
                  <div className="powerWarp">
                    <div>YES</div>
                    +{warpValue[1]}€
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div>Select option package:</div>
              <div class="col">
                <div class="btn" onClick={() => setOption(optionValue[0])}>
                  <div className="optionPackage">
                    <div>Basic</div>
                    +{optionValue[0]}€
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="btn" onClick={() => setOption(optionValue[1])}>
                  <div className="optionPackage">
                    <div>Sport</div>
                    +{optionValue[1]}€
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="btn" onClick={() => setOption(optionValue[2])}>
                  <div className="optionPackage">
                    <div>Lux</div>
                    +{optionValue[2]}€
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="total">
              <div class="row">
                  <div class="col-8">
                    <div>Base price:</div>
                    <div>Color:</div>
                    <div>Power:</div>
                    <div>Warp drive:</div>
                    <div>Option package:</div>
                  </div>
                  <div class="col">
                    <div class="row">
                      <div>1000€</div>
                      <div>+{color1}€</div>
                      <div>+{power1}€</div>
                      <div>+{warp1}€</div>
                      <div>+{option1}€</div>
                      {/* <div>{setColor}</div>
                      <div>{setPower}</div>
                      <div>{setWarp}</div>
                      <div>{setOption}</div> */}
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="col-8">
                  <div>Total:</div>
                </div>
                <div class="col">
                  <div>{color1 + power1 + warp1 + option1 + 1000}€</div>
                </div>
                <div>
              <button onClick={decrementCount}>-</button>
              <span>{count}</span>
              <button onClick={incrementCount}>+</button>
            </div>
              </div>              
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
