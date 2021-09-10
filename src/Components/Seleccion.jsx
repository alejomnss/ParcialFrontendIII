import React from 'react';


class Seleccion extends React.Component {

    render () {
        return (

            <div className="seleccion-anterior">

                <h4>Seleccion Anterior: {this.props.seleccion_anterior} </h4>
                <h5>Historial de opciones elegidas: {this.props.recuento}</h5>

            </div>

        )
    }
}

export default Seleccion;