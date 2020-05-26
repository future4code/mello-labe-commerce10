import React from 'react';

export class Produto extends React.Component{
    state={
        produto={
            nomeDoItem='',
            valorDoItem='',            
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
                </div>
            )
        })
        return 
        (
            <div>{listaDeProdutos}</div>
            
        );
    }