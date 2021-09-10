import React from 'react';


class Opciones extends React.Component {

    render() {

        return (

            <div className="opciones">
                <div className="option">
                    <button id="A" className="boton" onClick={this.props.botonA }>A</button>
                    <h3>{this.props.laA}</h3>
                </div>

                <div className='option'>
                    <button id="B" className="boton" onClick={this.props.botonB }>B</button>
                    <h3>{this.props.laB}</h3>
                </div>
                
            </div>
        )
    }
}

export default Opciones;