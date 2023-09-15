import React, { useEffect, useState } from "react";
import './ProdutoLista.css';
import { useNavigate } from "react-router-dom";

const ProdutoLista = () => {
	const navigate = useNavigate();

	const formulario = () => {
		navigate("/produto-formulario");
	}

	return (
		<div className="container">
			<h2>Lista de Produtos</h2>
			<button onClick={formulario}>Novo Produto</button>
		</div>
	);
}

export default ProdutoLista;