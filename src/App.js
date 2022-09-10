import React from "react";
import './App.css';
import MiApi from './components/MiApi'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h3 className="mb-3">Revisa aquí <br/> el último sismo del día en Chile</h3>
       <MiApi />
      </header>
    </div>
  );
}

export default App;