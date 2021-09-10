import React from 'react';
import Seleccion from './Components/Seleccion.jsx'
import Opcion from './Components/Opciones.jsx'
import Relato from './Components/Relato.jsx'
import data from './Components/data.json'
import './App.css';


let recuento = [];
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      seleccion_anterior: "",
    
    };
    this.botonA = this.botonA.bind(this);
    this.botonB = this.botonB.bind(this);
  }


componentDidUpdate(prevState) {
  if (prevState.counter !== this.state.counter) {
    recuento.push(this.state.seleccion_anterior);
  }
} 

  botonA(e) {
    console.log("Boton A")
    this.state.counter === 0 
    ? this.setState ({counter: this.state.counter +1, seleccion_anterior: "la opcion A"})
    : this.setState ({counter: this.state.counter +2, seleccion_anterior: "la opcion A"})
    if (this.state.counter > 6){
      alert("Finalizó tu historia")
    }
    
  }

  botonB(e) {
    console.log("Boton B")
    this.state.counter === 0 
    ? this.setState ({counter: this.state.counter +2, seleccion_anterior: "la opcion B"})
    : this.setState ({counter: this.state.counter +3, seleccion_anterior: "la opcion B"})
    if (this.state.counter > 7){
      alert("Finalizó tu historia")
  }
}


  render() {
    return (
      <div className="App">

        <Relato relato={data[this.state.counter].historia}/>
         
            <Opcion 
              botonA = {this.botonA}
              laA={data[this.state.counter].opciones.a}
              botonB = {this.botonB}
              laB={data[this.state.counter].opciones.b}
            />

        <Seleccion 
          seleccion_anterior={this.state.seleccion_anterior}
          recuento={recuento.map(
            (e, indice) => (
              <ul key={indice}>{e}</ul>
            )    
          )}
        />

      </div>
    )
  }

}

export default App;
