import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './ProdutoLista.css';
import ProdutoFormulario from "../formulario/ProdutoFormulario";

const ProdutoLista = () => {
    const navigate = useNavigate();
 

    useEffect(() => {
    }, []);

    const formulario = () => {
        navigate("/produto-formulario", { state: { id: 123 } });
    }

    return (
        <div className="container">
            <h2>Lista de Produtos</h2>
            <button onClick={formulario}>Novo</button>
            <br />
        </div>
    );
}

export default ProdutoLista;