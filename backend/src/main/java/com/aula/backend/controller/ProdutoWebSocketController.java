package com.aula.backend.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.aula.backend.entity.ProdutoNotificacao;

@Controller
public class ProdutoWebSocketController {
    
    @MessageMapping("/novo-produto")
    @SendTo("/produto/novo-produto")
    public ProdutoNotificacao notificarProduto(ProdutoNotificacao 
    notificacao){
        return notificacao;
    }

    @SendTo("/produto/atualizar-produto")
    public ProdutoNotificacao notificarAtualizarProduto(ProdutoNotificacao 
    notificacao){
        return notificacao;
    }
}
