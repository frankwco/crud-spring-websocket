import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { ProdutoService } from "../../../services/ProdutoService";

const ProdutoFormulario = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state || {};
    const { ii } = useParams();
    const novoProduto = { descricao: "", valor: 0.0, valorPromocional: 0.0 };
    const [produto, setProduto] = useState(novoProduto);
    const produtoService = new ProdutoService();

    useEffect(() => {
        console.log(id + " " + ii);
    }, []);

    const chamarPagina = () => {
        navigate("/produto");
    }

    const alteraProduto = (event) => {
        setProduto({ ...produto, [event.target.name]: event.target.value })
    }

    const salvar = () => {
        console.log(produto);
        produtoService.salvar(produto).then(data=>{
            console.log(data);
            setProduto(novoProduto);
        });
    }


    return (
        <div style={{padding:'10px'}}>
            {props.idade}
            <h2 onClick={chamarPagina}>Formulário de Produtos</h2>
            <input type="text" name="descricao" value={produto.descricao} onChange={alteraProduto} /><br/><br/>
            <input type="number" name="valor" value={produto.valor} onChange={alteraProduto} /><br/><br/>
            <button onClick={salvar}>Salvar</button>
            
        </div>
    );
}

export default ProdutoFormulario;