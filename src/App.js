import React from 'react';
import logo from './logo.svg';
import './App.css';
import Filtros from './Components/Filtros'
import Header from './Components/Header'
import Produto from './Components/Produto'
import Carrinho from './Components/Carrinho'



class App extends React.Component { 
  state = { 
    quantidadeProdutos : ''
   }

  mostraQuantidade = (x) => {
    this.setState({quantidadeProdutos : x});
  }

  render() { 
    return ( 
      <div className="App">
      <Filtros />
      <Header qnt={this.state.quantidadeProdutos} />
      <Produto  quantidade={this.mostraQuantidade.bind(this)}/>
      <Carrinho />
      </div>
    );
  }
} 

export default App;
