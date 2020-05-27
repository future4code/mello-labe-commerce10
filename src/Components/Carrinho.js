import React, { Component } from 'react';

class Carrinho extends Component {
    state = { 
        carrinho: [], 
        valorTotal: ''        
     }
    render() { 
        //map
        return ( 
            <div>
                <p>Carrinho</p>
                <p></p>
                <p>Total: R$ {this.state.valorTotal}</p>
            </div>
        );
    }
}
 
export default Carrinho;