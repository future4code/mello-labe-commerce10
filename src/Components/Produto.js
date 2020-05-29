import React from "react";
import styled from "styled-components";
import Carrinho from "./Carrinho";
import ReactDOM from 'react-dom'

const GridProduto = styled.div`
  display: flex;
  border: 1px solid black;
  width: 15vw;
  padding: 2px;
`;
const ItemDoCarrinho = styled.div`
display: flex;
flex-direction: row;
margin: 2px;
padding:2px;
`


class Produto extends React.Component {
       
   state = {
    itens: [
      { 
        nomeDoItem: "Arroz",
        valorDoItem: 25
      },
      {
        nomeDoItem: "Feijão",
        valorDoItem: 15
      },
      {
        nomeDoItem: "Batata",
        valorDoItem: 12
      }
    ],
    informacoesDoProduto: [
      {
        nome:'',
        valor:''
      }
    ],
    arrayDeValores: [
    ],
    valorTotalDoCarrinho:'',
    valorParaRemover: '',

  };

  componentDidUpdate(prevProps, prevState) {
    this.quantidade.bind(this);
   }  
  quantidade = e => {
    e.preventDefault();
    this.props.quantidade(this.state.itens.length);
  };

  onClickAdicionaAoCarrinho = (nome, valor) =>{
    
    const produtosNoCarrinho= [...this.state.informacoesDoProduto]
    produtosNoCarrinho.push({nome: nome, valor: valor});
    this.setState({informacoesDoProduto: produtosNoCarrinho})
    console.log(this.state.informacoesDoProduto)
    
    const valoresDoCarrinho=[...this.state.arrayDeValores]//abrindo o array
    valoresDoCarrinho.push(valor);//adicionando valores
    this.setState({arrayDeValores: valoresDoCarrinho})
        
    let valores= 0
    for(let valor of valoresDoCarrinho){
        valores=valor + valores        
    }      
    this.setState({valorTotalDoCarrinho: valores})
    
  }

  OnClickRemoveDoCarrinho=(event,valor)=>{  
    //apaga o elemento pai   
    ReactDOM.findDOMNode(event.target).parentNode.style.display = 'none'


    this.setState({valorParaRemover: valor})
    const totalDoCarrinho=this.state.valorTotalDoCarrinho
    const valorRemovido = totalDoCarrinho - valor
    this.setState({valorTotalDoCarrinho: valorRemovido})
    
    //retirando o valor removido do array de valores (ainda não funciona)
    let arrayAtualizado = this.state.arrayDeValores
    for (let preco of arrayAtualizado) {
        if (preco === valor){
            arrayAtualizado.splice(preco,1)
        }
    } 
   

    this.setState({arrayDeValores:arrayAtualizado})
    console.log(this.state.arrayDeValores)
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

    const listaDoCarrinho=this.state.informacoesDoProduto.map(produto=>{
        return (
            <ItemDoCarrinho>
                <p>{produto.nome}</p> 
                <p>{produto.valor}</p>
                <button onClick={(event) => {
                    {this.OnClickRemoveDoCarrinho(event, produto.valor)}
                                  
                }}>X</button>
            </ItemDoCarrinho>
        );
    });

    return (
      <div>
        <button onClick={()=>{this.quantidade.bind(this)}}>
          Exibir quantidade de Produtos
        </button>
        listaDeItens={listaDeProdutos}
        <Carrinho
        produtosNoCarrinho={listaDoCarrinho}
        valorTotalDosProdutos={this.state.valorTotalDoCarrinho}
        />
      </div>
    );
  }
}
export default Produto;
