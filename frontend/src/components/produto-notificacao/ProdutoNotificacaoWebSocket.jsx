import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import {Stomp} from "@stomp/stompjs";

const ProdutoNotificacaoWebSocket =()=>{
    const[notificacao, setNotificacao] = useState(null);
    const[clienteStomp, setClienteStomp] = useState(null);

    useEffect(() => {
        const socket = new SockJS("http://localhost:8080/ws");
        console.log("Conn")
        const stomp = Stomp.over(socket);
        stomp.connect({},()=>{
            console.log("Conectando")
            setClienteStomp(stomp);
            stomp.subscribe("/produto/novo-produto",message=>{
                console.log(message);
                setNotificacao(message.body);
            });
        });
        return () =>{
            //fazer alguma coisa quando o componente
            //for desmontado
        }
    }, []);

    return(
        <>
            {notificacao && 
                <div>
                    {notificacao}
                </div>
            }
        </>
    );
}
export default ProdutoNotificacaoWebSocket;