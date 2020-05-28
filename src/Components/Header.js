import React from 'react';
import styled from 'styled-components';
import Produto from './Produto';


const ContainerHeader = styled.div`
display: flex;
justify-content: space-between;
border: 1px solid black;
width: 98vw;
padding: 2px;
`

class Header extends React.Component{
    state={
        contador: 3 
    }
    render (){
        return ( 
        <ContainerHeader>
            <label>Quantidade de Produtos: {this.props.qnt}</label>
            <select>
                <option value= "crescente">Preço crescente</option>
                <option value= "decrescente">Preço decrescente</option>
            </select>
        </ContainerHeader>
        );
    }
}
export default Header; 