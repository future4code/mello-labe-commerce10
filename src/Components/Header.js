import React from 'react';
import styled from 'styled-components';
import logo from './assets/imgs/logo.png';
import Carrinho from './Carrinho';

// Estilização dos components
const ContainerHeader = styled.header`
display: flex;
justify-content: space-between;
height: 9vh;
background-color: #08088A;
`
const ArticleLogo = styled.article`
width: 30%;
height: 10vh;
border-radius: 5px;
img{
    margin: 2px 30px;
    width: 160px;
    height: 22vh;
}
`
class Header extends React.Component {
    state = {
        contador: 3,
        componente: false
    }

    onclickCarrinho = (event) => {
        this.setState({componente: !this.state.componente})
        console.log(this.state.componente)
    }
    render() {
        if (this.state.componente){
            <Carrinho />
        }
        
        return (
            <ContainerHeader>
                <ArticleLogo>
                    <img src={logo} alt='logo' />
                </ArticleLogo>             
            </ContainerHeader>
        );
    }
}
export default Header; 