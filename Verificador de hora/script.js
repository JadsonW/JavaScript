function carregar(){
    var msg =  window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 5 && hora <= 12 ){
        saudacao.innerHTML = 'bom dia!'
        img.src = 'manha.png.png'
        document.body.style.background = '#967535';
    }else if(hora > 12 && hora <= 18){
        saudacao.innerHTML = 'boa tarde!'  
        img.src = 'tarde.png.png'
        document.body.style.background = '#e6ac00'; 
    } else{
        saudacao.innerHTML = 'boa noite!'
        img.src = 'noite.png.png'
        document.body.style.background = '#003366';
    }

}
