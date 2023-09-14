import React, {useContext} from 'react';
import style from './Rodape.module.css';
import { TemaContexto } from '../../App';


const Rodape = () => {
  const {temaDark} = useContext(TemaContexto);
  return (
    <div className={`${style.rodape} ${temaDark?'dark':'light'}`}>
      <p>&copy; 2023 CRUD React, Spring e Websocket</p>
    </div>
  );
};

export default Rodape;
