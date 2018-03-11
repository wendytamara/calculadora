import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// const botones = ["7","8","9","+","4","5","6","-",
// "3","2","1","*","0",".","=","/"];


class App extends Component {

  
  render() {

    const botones = ["7","8","9","+","4","5","6","-",
    "3","2","1","*","0",".","=","/"];

    
    const youyou = botones.map(function(hobbiItem ,i){
      return <li key={i} >{hobbiItem}</li>
    })
 

    return (
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div id="Calculadora" class="col-md-6">
            <div class="panel panel-primary">
              <div class="panel-heading">Calculadora</div>
              <div class="panel-body">
                <div className="col-md-12" style={{marginBottom: '10px'}}>
                  <div id="idCalculadora">
                    <div class="form-group">
                      <input type="text" class="form-control" style={{height:'67px',fontSize:'44px',textAlign:'right',marginBottom:"20px",boxShadow:"inset 3px 3px rgba(0, 0, 0, 0.2)"}} />
                      <div class="row">
                        <div>
                        
                        {youyou}

                        </div>
                       </div>
                    </div>
                  </div>
              </div>
            </div>
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default App;





// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }