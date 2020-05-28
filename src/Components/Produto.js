import React from 'react';
import styled from 'styled-components';
import Header from './Header'


const GridProduto = styled.div`
display: flex;
border: 1px solid black;
width: 15vw;
padding: 2px;
`
class Produto extends React.Component{

    componentDidUpdate(prevProps, prevState) {
        this.quantidade.bind(this)
    }

    state={
        itens:[{
            nomeDoItem:'Arroz',
            valorDoItem:'25',            
            },
            {
            nomeDoItem:'Feijão',
            valorDoItem:'15',            
            },
            {
            nomeDoItem:'Batata',
            valorDoItem:'12',            
            },]
        }

    quantidade = (e) =>{
        e.preventDefault();
        this.props.quantidade(this.state.itens.length)
    }
        

    render (){
        const listaDeProdutos = this.state.itens.map(item =>{
            return (
                <GridProduto>                    
                    <p>{item.nomeDoItem}</p>
                    <p>R$: {item.valorDoItem}</p>
                    <button>ADICIONAR AO CARRINHO</button>
                </GridProduto>
            );
        })      
        return(
        <div>
        <button onClick={this.quantidade.bind(this)}>Exibir quantidade de Produtos</button>
            listaDeItens={listaDeProdutos}
        </div>
        );
      }   
    }
    export default Produto;