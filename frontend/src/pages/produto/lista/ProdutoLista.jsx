import React, { useEffect, useState } from "react";
import './ProdutoLista.css';
import { useNavigate } from "react-router-dom";
import { ProdutoService } from "../../../services/ProdutoService";

const ProdutoLista = () => {
	const navigate = useNavigate();
	const [produtos, setProdutos] = useState([]);
	const produtoService = new ProdutoService();

	useEffect(() => {
		buscarProdutos();
	}, []);

	const buscarProdutos = () => {
		produtoService.listar().then(data => {
			setProdutos(data.data);
		})
	}

	const formulario = () => {
		navigate("/produto-formulario");
	}

	return (
		<div className="container">
			<h2>Lista de Produtos</h2>
			<button onClick={formulario}>Novo Produto</button>
			<br /><br />
			{produtos.map((produto)=>
				<p key={produto.id}>{produto.descricao} {produto.valor}</p>	
			)}
		</div>
	);
}

export default ProdutoLista;