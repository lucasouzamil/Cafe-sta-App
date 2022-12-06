document.addEventListener('DOMContentLoaded', function() {
    body = document.querySelector('body')

    enviar = document.querySelector('.botao_env')

    mensagem_barra = document.querySelector(".digitar_mensagem")


    chat = document.querySelector('.area_do_chat')

    function envio(){
        if (mensagem_barra.value==''){
            aviso = document.createElement('p')
            body.appendChild(aviso)
            aviso.innerHTML = 'Escreva algo antes de enviar :)'
            aviso.style.color = '#BF6C60'
        

        }else{
            li = document.createElement('li')
            chat.appendChild(li)
            li.className = "enviada"
            texto = document.createElement('p')
            li.appendChild(texto)
            texto.className = 'balao_msg_enviada'
            texto.innerHTML = mensagem_barra.value
        }
    }

    enviar.addEventListener('click', envio)

    barra_pesquisa = document.getElementById('pesquisa')
    botao_pesquisa = document.getElementById('botao_market')
    grupo_comunidade = document.getElementById('topo_comunidade2')

    localStorage.setItem('pesquisa', barra_pesquisa.value)


    botao_pesquisa.addEventListener('click', function(event){

        assuntos = document.createElement('p')
        grupo_comunidade.appendChild(assuntos)

        if (localStorage.getItem('pesquisa')==''){
            assuntos.innerHTML = 'Escreva algo antes de pesquisar :)'
        }else{
            assuntos.innerHTML = localStorage.getItem('pesquisa')
        }
        
    })

})