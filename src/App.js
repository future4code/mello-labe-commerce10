import React from 'react';
import Produto from './Components/Produto'
import Filtros from './Components/Filtros'
import './App.css';

function App() {
	return (
		<div className="App">						
			<Filtros/>
			<Header/> 
			<Produto/>
			<Carrinho/>
		</div>
	);
}

export default App;
