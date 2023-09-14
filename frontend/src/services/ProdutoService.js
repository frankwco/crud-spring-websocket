import axios from "axios";

export class ProdutoService{
    URL = "http://localhost:8080/produtos";

    salvar(produto){
		return axios.post(this.URL, produto);
	}

	consultar(){
		return axios.get(this.URL);
	}
}