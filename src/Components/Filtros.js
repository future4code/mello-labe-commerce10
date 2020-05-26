import React, { Component } from 'react';

class Filtros extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2 className="filtrosh2">Filtros:</h2>
                <div className="valorMinimo">
                    <label for="valorMin">Valor Mínimo: </label>
                    <input type="number" min="0" name="valorMin" />
                </div>
                <div className="valorMaximo">
                    <label for="valorMax">Valor Máximo: </label>
                    <input type="number" min="0" name="valorMax" />
                </div>
                <div className="buscarProduto">
                    <label for="buscarProd">Buscar Produto: </label>
                    <input type="text" name="buscarProd" />
                </div>
            </div>
        );
    }
}
 
export default Filtros;