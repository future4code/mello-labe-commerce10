import React from 'react';
import styled from 'styled-components';
import shoppingCart from './assets/imgs/shopping-cart.png'

// Estilização dos components
const ContainerHeader = styled.header`
display: flex;
justify-content: space-around;
height: 16vh;
background-color: #08088A;
`

const ArticleCarinho = styled.article`
width: 20%;
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

const ArticleLogo = styled.article`
width: 30%;
height: 10vh;
background-color: red;
border-radius: 5px;
`

class Header extends React.Component {
    state = {
        contador: 3
    }
    render() {
        return (
            <ContainerHeader>
                <ArticleLogo>
                    <p> LOGO</p>
                </ArticleLogo>
                <ArticleCarinho>
                    <a>
                        <img src={shoppingCart} alt='cart' />
                        <p>Meu Carrinho</p>
                    </a>

                </ArticleCarinho>

            </ContainerHeader>
        );
    }
}
export default Header; 