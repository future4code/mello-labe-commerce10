import React from 'react';
import Header from './Components/Header';
import Filtros from './Components/Filtros';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Filtros />
      </>
    );
  }
}
export default App;
