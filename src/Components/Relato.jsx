import React from 'react';

class Relato extends React.Component {

    render() {

        return (

            <div className="relato">
                <div>
                    <h2>{this.props.relato}</h2>
                </div>        
            </div>

        )
    }
}

export default Relato;