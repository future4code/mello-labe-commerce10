import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Carrinho from "./Carrinho";

const GridProduto = styled.div`
  display: flex;
  border: 1px solid black;
  width: 15vw;
  padding: 2px;
`;
class Produto extends React.Component {
  
   componentDidUpdate(prevProps, prevState) {
   this.quantidade.bind(this);
  }
   state = {
    itens: [
      {
        nomeDoItem: "Arroz",
        valorDoItem: "25"
      },
      {
        nomeDoItem: "Feijão",
        valorDoItem: "15"
      },
      {
        nomeDoItem: "Batata",
        valorDoItem: "12"
      }
    ],
    nomeNoCarrinho: [],
    valorNoCarrinho:'',
  };

  
  quantidade = e => {
    e.preventDefault();
    this.props.quantidade(this.state.itens.length);
  };

  onClickAdicionaAoCarrinho = (nome, valor) =>{
    this.setState({nomeNoCarrinho: nome,
      valorNoCarrinho: valor
    })     
  }

  render() {
    const listaDeProdutos = this.state.itens.map(item => {
      return (
        <GridProduto>
          <p>{item.nomeDoItem}</p>
          <p>R$: {item.valorDoItem}</p>
          <button onClick={()=> {this.onClickAdicionaAoCarrinho(item.nomeDoItem,item.valorDoItem)}}>ADICIONAR AO CARRINHO</button>
        </GridProduto>
      );
    });
    
    return (
      <div>
        <button onClick={()=>{this.quantidade.bind(this)}}>
          Exibir quantidade de Produtos
        </button>
        listaDeItens={listaDeProdutos}
        <Carrinho
        nomeDoProduto={this.state.nomeNoCarrinho}
        valorDoProduto={this.state.valorNoCarrinho}
        />
      </div>
    );
  }
}
export default Produto;
