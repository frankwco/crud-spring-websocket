import axios from 'axios';

export class ProdutoService{
	URL = "http://localhost:8080/produtos";

	inserir(produto){
		return axios.post(URL, produto);
	}

	alterar(produto){
		return axios.put(URL, produto);
	}

	excluir(id){
		return axios.delete(URL, id);
	}

	listar(){
		return axios.get(URL);
	}
}