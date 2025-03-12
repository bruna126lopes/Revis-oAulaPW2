function logar(event) {

    event.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario == 'usuario123' && senha == 'senha123') {

        Swal.fire({
            title: 'Login realizado!',
            text: 'Bem-vindo,' + usuario + '!',
            icon: 'success',
            confirmButttonText: 'OK'
        }).then(() => {
            setTimeout(() => {
                location.href = "/html/home.html";
            }, 100);
        });
    } else {
      Swal.fire({
        title: 'Erro!',
        text: 'Usuário ou senha incorretos.',
        icon: 'error',
        confirmButtonText: 'Tentar novamente',

      });

    }
}