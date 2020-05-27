import React from 'react';

class Produto extends React.Component{
    state={
        itens:[{
            nomeDoItem:'Arroz',
            valorDoItem:'25',            
            }]
        }
    
    render (){
        const listaDeProdutos = this.state.itens.map(item =>{
            return (
                <div>                    
                    <p>{item.nomeDoItem}</p>
                    <p>{item.valorDoItem}</p>
                    <button>ADICIONAR AO CARRINHO</button>
                </div>
            );
        })      
        return(
        <p>{listaDeProdutos}</p>
        );
      }   
    }
    export default Produto;