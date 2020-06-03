import React from "react";
import styled from "styled-components";
import Carrinho from "./Carrinho";
import shoppingCart from './assets/imgs/shopping-cart.png'
import space from './assets/imgs/space-technology.jpg';
import ReactDOM from 'react-dom'



const MainContainer = styled.main`
margin-top:10px;
display: grid;
grid-template-columns: repeat(4, 1fr);
justify-items: center;
grid-gap: 20px;

div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 65vh;
    border-radius: 10px;
    border: 1.5px solid #D8D8D8; 
    :hover{
        border: 1px solid #FF4000; 
    }
    img{
        width: 90%;
        height: 60%;
    }
    section{
        display: flex;
        width: 80%;
        background-color:  #08088A;
        border-radius: 5px;
        img{
            width: 34px;
            height: 34px;
        }
        button{
            cursor: pointer;
            width: 100%;
            text-decoration: none;
            border: none;
            font-style: italic;
            text-transform: uppercase;
            border-radius: 0px 25px 5px 25px;
            background-color: #FF4000;
        }
    }
}
`

const Preco = styled.p`
font-size: 20px;
color: #FF4000;
font-weight: bold;
`
// estilização carrinho
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
        id: 1,
        imagem: space,
        nomeDoItem: 'Satélite antigo',
        valorDoItem: 25
      },
      {
        id: 2,
        imagem: '',
        nomeDoItem: "Feijão",
        valorDoItem: 15
      },
      {
        id: 3,
        imagem: '',
        nomeDoItem: "Batata",
        valorDoItem: 12
      },
      {
        id: 3,
        imagem: '',
        nomeDoItem: "Batata",
        valorDoItem: 12
      },
      {
        id: 3,
        imagem: '',
        nomeDoItem: "Batata",
        valorDoItem: 12
      },
      {
        id: 3,
        imagem: '',
        nomeDoItem: "Batata",
        valorDoItem: 12
      },
      {
        id: 3,
        imagem: '',
        nomeDoItem: "Batata",
        valorDoItem: 12
      },
      {
        id: 3,
        imagem: '',
        nomeDoItem: "Batata",
        valorDoItem: 12
      }
    ],
    informacoesDoProduto: [
      {
        nome: '',
        valor: ''
      }
    ],
    arrayDeValores: [
    ],
    valorTotalDoCarrinho: '',
    valorParaRemover: '',

  };

  componentDidUpdate(prevProps, prevState) {
    this.quantidade.bind(this);
  }
  quantidade = e => {
    e.preventDefault();
    this.props.quantidade(this.state.itens.length);
  };

  onClickAdicionaAoCarrinho = (nome, valor) => {

    const produtosNoCarrinho = [...this.state.informacoesDoProduto]
    produtosNoCarrinho.push({ nome: nome, valor: valor });
    this.setState({ informacoesDoProduto: produtosNoCarrinho })
    console.log(this.state.informacoesDoProduto)

    const valoresDoCarrinho = [...this.state.arrayDeValores]//abrindo o array
    valoresDoCarrinho.push(valor);//adicionando valores
    this.setState({ arrayDeValores: valoresDoCarrinho })

    let valores = 0
    for (let valor of valoresDoCarrinho) {
      valores = valor + valores
    }
    this.setState({ valorTotalDoCarrinho: valores })

  }

  OnClickRemoveDoCarrinho = (event, valor) => {
    //apaga o elemento pai   
    ReactDOM.findDOMNode(event.target).parentNode.style.display = 'none'


    this.setState({ valorParaRemover: valor })
    const totalDoCarrinho = this.state.valorTotalDoCarrinho
    const valorRemovido = totalDoCarrinho - valor
    this.setState({ valorTotalDoCarrinho: valorRemovido })

    //retirando o valor removido do array de valores (ainda não funciona)
    let arrayAtualizado = this.state.arrayDeValores
    for (let preco of arrayAtualizado) {
      if (preco === valor) {
        arrayAtualizado.splice(preco, 1)
      }
    }


    this.setState({ arrayDeValores: arrayAtualizado })
    console.log(this.state.arrayDeValores)
  }

  render() {
    const listaDeProdutos = this.state.itens.map(item => {
      return (
        <div>
          <img src={item.imagem} alt='imagem do produto' />
          <p>{item.nomeDoItem}</p>
          <Preco>R$: {item.valorDoItem}</Preco>
          <section>
            <img src={shoppingCart} alt='carrinho de compras' />
            <button onClick={() => { this.onClickAdicionaAoCarrinho(item.nomeDoItem, item.valorDoItem) }}>Comprar</button>
          </section>
        </div>
      );
    });

    const listaDoCarrinho = this.state.informacoesDoProduto.map(produto => {
      return (
        <ItemDoCarrinho>
          <p>{produto.nome}</p>
          <p>{produto.valor}</p>
          <button onClick={(event) => {
            { this.OnClickRemoveDoCarrinho(event, produto.valor) }

          }}>X</button>
        </ItemDoCarrinho>
      );
    });

    return (
      <div>
        < MainContainer>
          {listaDeProdutos}
        </MainContainer>

        <button onClick={() => { this.quantidade.bind(this) }}>
          Exibir quantidade de Produtos
        </button>

        <Carrinho
          produtosNoCarrinho={listaDoCarrinho}
          valorTotalDosProdutos={this.state.valorTotalDoCarrinho}
        />
      </div>
    );
  }
}
export default Produto;
