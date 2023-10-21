import React from 'react';
import styles from './Home.module.css';
import ProdutoNotificacaoWebSocket from '../../components/produto-notificacao/ProdutoNotificacaoWebSocket';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Bem-vindo à Página Inicial da sua Loja Virtual</h1>
      <ProdutoNotificacaoWebSocket />
      <p>Conteúdo....</p>
	  <div className={styles.card}>
	  </div>
    
    </div>
  );
};

export default Home;
