import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import Resultado from './Resultado';
import {obtenerDiferenciaAnio,calcularMarca,obtenerPlan} from '../helper';


class App extends Component {

   state ={
     resultado : '',
     datos: {}
   }

   cotizarSeguro = (datos) =>{
    const {marca, plan, year} = datos;

    //Base de 2000
    let resultado = 2000;

    //Obtener la diferencia de años y restar el 3% por cada año al valor del seguro
    const diferencia = obtenerDiferenciaAnio(year);
    resultado -=((diferencia*3)*resultado)/100;
    
    //Americano 15%, asiatico 5% y europeo 30% al valor actual
    resultado = calcularMarca(marca) * resultado;

    //el plan del basico incrementa 20% y el completo 50%
    let incrementoPlan = obtenerPlan(plan);
    
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    const datosAuto = {
        marca: marca,
        plan: plan,
        year: year
    }

    this.setState({
        resultado: resultado,
        datos: datosAuto
    })
  }

  render() {
    return (
      <div className="contenedor">
       <Header
        titulo ='Cotizador de seguros de autos'
       />
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />

          <Resumen
            datos = {this.state.datos}
            
          />

          <Resultado
              resultado = {this.state.resultado}
          />
       
        </div>
        
      </div>
    );
  }
}

export default App;
