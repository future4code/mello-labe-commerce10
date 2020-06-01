import React, { Component } from 'react';
import styled from 'styled-components';
import shoppingCart from './assets/imgs/shopping-cart.png';

const ContainerCarrinho = styled.div `
border: ridge silver;
width: 20%;
height: 100vh;
`
const ArticleCarinho = styled.article`
width: 100%;
height: 10vh;
background-color: #0000FF;
box-shadow: 2px 2px 10px #FF4000;
border-radius: 0px 0px 5px 5px;
a{
    display: flex;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
    img{
        height: 40px;
        width: 40px;
    }
    p{
        margin-top: 3px;
        text-transform: uppercase;
        font-style: italic;
    }
}
`

class Carrinho extends Component {
    state = {
        produtos: [], 
        valorTotal: ''        
    }
    
    render() {        
        
        return ( 
            <ContainerCarrinho>
                <ArticleCarinho>
                    <a onClick= {this.onclickCarrinho}>
                        <img src={shoppingCart} alt='cart' />
                        <p>Meu Carrinho</p>
                    </a>   
                </ArticleCarinho>
                <p>{this.props.produtosNoCarrinho}</p>
                <p>Total: R$ {this.props.valorTotalDosProdutos}</p>
            </ContainerCarrinho>
        );
    }
}
 
export default Carrinho;