import React, { Component } from 'react'

import {primeraMayuscula} from '../helper';

class Resumen extends Component{

    monstrarResumen = ()=>{
        const {marca,year,plan} = this.props.datos;
        if(!marca & !year & !plan) return null;
        return(
            <div className="resumen">
            <h2>Resume de cotización</h2>
            <li>Marca: {primeraMayuscula(marca)}</li>
            <li>Plan: {primeraMayuscula(plan)}</li>
            <li>Año: {primeraMayuscula(year)}</li>
            </div>
        )
    }
    render(){
        
        return(
            <div>
                {this.monstrarResumen()}
               
                
            </div>
        )
    }
}

export default Resumen;