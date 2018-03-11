import React, { Component } from 'react';
import './App.css';


class App extends Component {

  render() {

    const botones = ["7","8","9","+","4","5","6","-",
    "3","2","1","*","0",".","=","/"];

    
    const btn = botones.map(function(Item ,i){
      return  <div key={i} className="col-md-3" style={{marginBottom: '10px'}}> <input className="btn-lg btn-block btn btn-primary" value={Item} key={i} type="text"/> </div>
    })
 

    return (
      <div className="container">
        <div className="row">
        <div className="panel-heading"></div>
          <div className="col-md-3 panel-primary">
          <div className="panel-heading">Historial</div>
          <div className="panel-body" style={{height: '400px',border:'2px solid #337ab7'}}> </div>
          </div>
          <div id="Calculadora" className="col-md-6">
            <div className="panel panel-primary">
              <div className="panel-heading">Calculadora</div>
              <div className="panel-body">
                <div className="col-md-12" style={{marginBottom: '10px'}}>
                  <div id="idCalculadora">
                    <div className="form-group">
                      <input type="text" className="form-control" style={{height:'67px',fontSize:'44px',textAlign:'right',marginBottom:"20px",boxShadow:"inset 3px 3px rgba(0, 0, 0, 0.2)"}} />
                      <div className="row">
                        <div>
                        
                        {btn}

                        </div>
                        <input className="btn-lg btn-block btn btn-danger" value="Borrar"  type="button"/>

                       </div>
                    </div>
                  </div>
              </div>
            </div>
            </div>
            
          </div>
          <div className="col-md-3"></div>
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