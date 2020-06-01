import React, { Component } from "react";
import styled from 'styled-components';
import search from './assets/imgs/search.png';
import Header from "./Header";

const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 14vh;
background-color: #08088A;;

div{
    display: flex;
    justify-content: center;
    width: 60%;
    background-color: #0000FF;
    height: 6vh;
    border-radius: 10px;
    line-height: 50px;
    img{
        height: 4vh;
        margin-top: 1vh;
        margin-left: 6px;
    }
    a{
        cursor: pointer;
    }
}
`

const Input = styled.input`
border-radius: 10px;
height: 4vh;
width: 80%;
text-align: center;
margin-top: 1vh;
border: none;
`

const InputValores = styled.input`
margin-top: 6px;
width: 15%;
height: 50%;
`

const LabelValormaximo = styled.label`
height: 4vh;
width: 15%;
text-align: center;
line-height: 3vh;
background-color: white;
margin-top: 1vh;
border-radius: 5px 0px 0px 5px;
`

const LabelValorminimo = styled.label`
height: 4vh;
width: 15%;
text-align: center;
line-height: 3vh;
background-color: white;
margin-top: 1vh;
border-radius: 0px 5px 5px 0px;
`

class Filtros extends Component {
  state = {
    quantidadeProdutos: ''
  }

render() {
    return (
      <Section>
        <div>
          <Input type='search' placeholder='Encontre seu produto'></Input>
          <a>
            <img src={search} alt='pesquisa' />
          </a>
        </div>
        <div>
          <LabelValormaximo>Valor máximo</LabelValormaximo>
          <InputValores type='number'></InputValores>
          <InputValores type='number'></InputValores>
          <LabelValorminimo value='Valor mínimo'>Valor mínimo</LabelValorminimo>
        </div>
      </Section>

    )
  }
}


export default Filtros;
