import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import './ProdutoFormulario.css';
import { ProdutoService } from "../../../services/ProdutoService";

const ProdutoFormulario = (props) => {
	//const navigate = useNavigate();
	//const location = useLocation();
	///const { id } = location.state || {};
	//const { ii } = useParams();
	const produtoNovo = { descricao: '', valor: 0, valorPromocional: 0 };
	const [produto, setProduto] = useState(produtoNovo);
	const produtoService = new ProdutoService();

	const alterarValor = (event) => {
		setProduto({ ...produto, [event.target.name]: event.target.value });
	}
	
	const salvar = ()=>{
		produtoService.inserir(produto).then(data=>{
			console.log(data);
		});
	}

	return (
		<div style={{ padding: '10px' }}>
			<h2>Inserir ou Alterar um Produto</h2>
			<input type="text" name="descricao" value={produto.descricao} onChange={alterarValor} />
			<input type="number" name="valor" value={produto.valor} onChange={alterarValor} />
			<input type="number" name="valorPromocional" value={produto.valorPromocional} onChange={alterarValor} />
			<button onClick={salvar}>Salvar</button>
		</div>
	);
}

export default ProdutoFormulario;