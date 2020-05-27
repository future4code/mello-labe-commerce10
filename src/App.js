import React from 'react';
import Produto from './Components/Produto';
import Filtros from './Components/Filtros';
import Header from './Components/Header';
import Carrinho from './Components/Carrinho';
import styled from 'styled-components';

const DivProdutos = styled.div`
display: flex;
flex-direction: row;
`

function App() {
	return (
		<div className="App">	
			<Header/>
			<DivProdutos>				
				<Filtros/>
				<Produto/>
			</DivProdutos>	
			<Carrinho/>
					
		</div>
	);
}

export default App;
