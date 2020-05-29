import React from 'react';
import Header from './Components/Header';
import Filtros from './Components/Filtros';
import Produtos from './Components/Produto';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Filtros />
        <Produtos />
      </>
    );
  }
}
export default App;
