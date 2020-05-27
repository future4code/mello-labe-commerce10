import React from 'react';
import styled from 'styled-components';

const GridProduto = styled.div`
display: flex;
border: 1px solid black;
width: 15vw;
padding: 2px;
`
class Produto extends React.Component{
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
            }]
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
        <p>listaDeItens={listaDeProdutos}</p>
        );
      }   
    }
    export default Produto;