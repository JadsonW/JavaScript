function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fAno = document.getElementById('txtano')
var res = document.querySelector('div#res')

if(fAno.value == 0 || Number(fAno.value) > ano){
window.alert('[ERROR] Verifique os dados e tente novamente!')
} else{
 var fsex = document.getElementsByName('radsex')
 var idade = ano - Number(fAno.value)
 var genero = ''
 var img = document.createElement('img')
 img.setAttribute('id', 'foto')
 

 if(fsex[0].checked){
    genero = 'Homem'
    if(idade >= 0 && idade <= 16){
        //criança
       img.setAttribute('src', 'homemJovem.png')
    }else if(idade >=17 && idade <=40){
        //adulto
        img.setAttribute('src', 'homemAdulto.png')
    } else{
        //idoso 
        img.setAttribute('src', 'homemidoso.png')
    }
    
 }else{
    genero = 'Mulher'
    if(idade >= 0 && idade <= 16){
        //criança
        img.setAttribute('src', 'mulherjovem.png')
    }else if(idade >=17 && idade <=40){
        //adulta
        img.setAttribute('src', 'Mulheradulta(1).png')
    } else{
        //idosa
        img.setAttribute('src', 'Mulheridosa.png')
    }
 }
 res.style.textAlign = 'center'
 res.innerHTML = `Detectamos ${genero} com ${idade} anos`
 res.appendChild(img)
}
}

