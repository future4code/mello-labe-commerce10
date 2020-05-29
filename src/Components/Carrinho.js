import React, { Component } from 'react';


class Carrinho extends Component {
    tate = {
        produtos: [], 
        valorTotal: ''        
    }
    
    componentDidUpdate = ()=>{
       
        //this.setState({nome: this.props.nomeDoProduto})
    } 
    render() {        
        //const listaDeProdutos= this.state.produtos.map(produto =>{
        //  return (
        //    <p>{this.props.nomeDoProduto}
        //    {this.props.valorDoProduto}            
        //    </p>
        //    );
        //})
       return ( 
            <div>
                <p>Carrinho</p>
                <p>{this.props.produtosNoCarrinho}</p>
                <p>Total: R$ {this.props.valorTotalDosProdutos}</p>
            </div>
        );
    }
}
 
export default Carrinho;