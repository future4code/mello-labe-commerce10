import React from "react";
import styled from "styled-components";
import Carrinho from "./Carrinho";
import shoppingCart from './assets/imgs/shopping-cart.png'
import produto1 from './assets/imgs/space-technology.jpg';
import produto2 from './assets/imgs/pantufa.jpg';
import produto3 from './assets/imgs/05_pedacolua.jpg';
import produto4 from './assets/imgs/6_copo.jpg';
import produto5 from './assets/imgs/traje.jpg';
import produto6 from './assets/imgs/03_capacete.jpg';
import produto7 from './assets/imgs/pedacobandeira.PNG';
import produto8 from './assets/imgs/2_roupa.PNG';
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
// estilização do carrinho
const ItemDoCarrinho = styled.div`
display: flex;
flex-direction: row;
justify-content:space-between;
align-items: center;
margin: 2px;
padding:2px;
`
const Botao = styled.a`
	color: orangered;
	font-size: 18px;
	align-items: center;
	padding: 2px;
`
const ContainerPrincipal = styled.div`
 display: flex;
 flex-direction: row;
`
class Produto extends React.Component {

  state = {
    itens: [
      {
        id: 0,
        imagem: produto1,
        nomeDoItem: 'Satélite antigo',
        valorDoItem: 80
      },
      {
        id: 1,
        imagem: produto2,
        nomeDoItem: "Pantufa de astronauta",
        valorDoItem: 55
      },
      {
        id: 2,
        imagem: produto3,
        nomeDoItem: "Pedaço da lua",
        valorDoItem: 1000
      },
      {
        id: 3,
        imagem: produto4,
        nomeDoItem: "Copo espacial",
        valorDoItem: 25
      },
      {
        id: 4,
        imagem: produto5,
        nomeDoItem: "Traje espacial",
        valorDoItem: 70
      },
      {
        id: 5,
        imagem: produto6,
        nomeDoItem: "Capacete de astronauta",
        valorDoItem: 120
      },
      {
        id: 6,
        imagem: produto7,
        nomeDoItem: "Bandeira hasteada na lua",
        valorDoItem: 5000
      },
      {
        id: 7,
        imagem: produto8,
        nomeDoItem: "Pijama de astronauta",
        valorDoItem: 50
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
	
	//adicionando produtos 
    const produtosNoCarrinho = [...this.state.informacoesDoProduto]
    produtosNoCarrinho.push({ nome: nome, valor: valor });
    this.setState({ informacoesDoProduto: produtosNoCarrinho })
    console.log(this.state.informacoesDoProduto)

	//somando valores dos produtos adicionados
    const valoresDoCarrinho = [...this.state.arrayDeValores]
    valoresDoCarrinho.push(valor);
    this.setState({ arrayDeValores: valoresDoCarrinho })

    let valores = 0
    for (let valor of valoresDoCarrinho) {
      valores = valor + valores
    }
    this.setState({ valorTotalDoCarrinho: valores })

  }

  OnClickRemoveDoCarrinho = (event, valor, index) => {
    //apaga o elemento pai  
    ReactDOM.findDOMNode(event.target).parentNode.style.display = 'none'
	
	//subtraindo valores do total
    this.setState({ valorParaRemover: valor })
    const totalDoCarrinho = this.state.valorTotalDoCarrinho
    const valorRemovido = totalDoCarrinho - valor
    this.setState({ valorTotalDoCarrinho: valorRemovido })

    //retirando o valor removido do array de valores (ainda não funciona)
    let arrayAtualizado = this.state.arrayDeValores
    arrayAtualizado.splice(index, 1)    
    this.setState({arrayDeValores:arrayAtualizado})
  
  };

  render() {
    const listaDeProdutos = this.state.itens.map(item => {
      return (
        <div>
          <img src={item.imagem} alt='imagem do produto' />
          <p>{item.nomeDoItem}</p>
          <Preco>R$ {item.valorDoItem}.00</Preco>
          <section>
            <img src={shoppingCart} alt='carrinho de compras' />
            <button onClick={() => { 
				this.onClickAdicionaAoCarrinho(item.nomeDoItem, item.valorDoItem) 
				}}>Comprar
			</button>
          </section>
        </div>
      );
    });

    const listaDoCarrinho = this.state.informacoesDoProduto.map(produto => {
      return (
        <ItemDoCarrinho>
          <p>{produto.nome}</p>
          <p>R$ {produto.valor}.00</p>
          <Botao onClick={(event) => {
            { this.OnClickRemoveDoCarrinho(event, produto.valor, produto.id) }
          }}>X</Botao>
        </ItemDoCarrinho>
      );
	});
	
    return (
      <ContainerPrincipal>
        < MainContainer>
          {listaDeProdutos}
        </MainContainer>   

        <Carrinho
          produtosNoCarrinho={listaDoCarrinho}
          valorTotalDosProdutos={this.state.valorTotalDoCarrinho}
        />
      </ContainerPrincipal>
    );
  }
}
export default Produto;
