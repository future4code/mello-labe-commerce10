import React from 'react';

export class Produto extends React.Component{
    state={
        produto={
            nomeDoItem:'Arroz',
            valorDoItem:'25',            
            }
        }
    }
    render (); {
        const listaDeProdutos = this.state.produto.map(item=>{
            return (
                <div> 
                    <img src=""/>
                    <p>item.nomeDoItem</p>
                    <p>item.valorDoItem</p>
                    <button>ADICIONAR AO CARRINHO</button>
                </div>
            )
        })
        return         
            <div>{listaDeProdutos}</div>
            
        
    }