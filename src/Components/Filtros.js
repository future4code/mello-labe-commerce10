import React, { Component } from "react";
import Header from './Header';
import Produto from './Produto';

class Filtros extends Component {
  state = { 
    quantidadeProdutos : ''
   }  
  mostraQuantidade = (x) => {
    this.setState({quantidadeProdutos : x});
  }
  render() {
    return (
      <div>
        <Header qnt={this.state.quantidadeProdutos} />
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
        <Produto quantidade={this.mostraQuantidade.bind(this)}/>
      </div>
    );
  }
}

export default Filtros;
