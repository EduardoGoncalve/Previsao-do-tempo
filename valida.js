const usuarios = [
    {
        login: "victor",
        pass: "victor"
    },

    {
        login: "julio",
        pass: "julio"
    },

    {
        login: "admin",
        pass: "admin"
    }
]

let botao = document.getElementById('btn-login');

botao.addEventListener('click', function logar(){

    let pegausuario = document.getElementById('usuario').value
    let pegasenha = document.getElementById('senha').value
    let validalogin = false

    for(let i in usuarios){

        if(pegausuario == usuarios[i].login && pegasenha == usuarios[i].pass){
            validalogin = true
            break
        }
    }

    if(validalogin == true){
        location.href ='index2.html'
    }else{
        alert('Usuario ou senha incorretos');
    }

})