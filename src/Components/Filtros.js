import React, { Component } from 'react';
import Produto from './Produto';

class Filtros extends Component {
    state = { 
        valorMinimo:'',
        valorMaximo:'',
        nomeDoProduto:''
    }    
    //onClickBuscaProdutos = (event) =>{
    //    console.log(props.listaDeItens)
    //    const novaListaDeItens= [...this.props.listaDeItens]
    //   // const listaFiltradaDeProdutos = this.state.
    //}
    render() { 
        return ( 
            <div>
                <h2 className="filtrosh2">Filtros:</h2>
                <div className="valorMinimo">
                    <label for="valorMin">Valor Mínimo: </label>
                    <input type="number" min="0" name="valorMin" value={this.state.valorMinimo}/>
                </div>
                <div className="valorMaximo">
                    <label for="valorMax">Valor Máximo: </label>
                    <input type="number" min="0" name="valorMax" value={this.state.valorMaximo} />
                </div>
                <div className="buscarProduto">
                    <label for="buscarProd">Buscar Produto: </label>
                    <input type="text" name="buscarProd" value={this.state.nomeDoProduto}/>
                </div>
                <button onClick={this.onClickBuscaProdutos}>Buscar Produto</button>
            </div>
        );
    }
}
 
export default Filtros;