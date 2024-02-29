function    adiocinarConta(){
        let contas = this.lerDados();
        console.log(contas)
       }
      function lerDados(){
        let contas = {}
        contas.nome = document.querySelector('.nome').value;
        contas.senha = document.querySelector('.senha').value;
        contas. endereco = document.querySelector('.endereco').value;
        contas.email = document.querySelector('.email').value;
        return contas
       }
      function Transportar(){
        let paginaDeLogin = document.getElementById('paginaDeLogin').innerHTML = `
        <div class="form-login">
        <h3>Login</h3>
        <label>Nome do usuario</label>
        <input type="text" class="nome2" placeholder="Nome do usuario"> <br>
        <label>Senha</label>
        <input type="text" class="senha2" placeholder="Senha">
        <button class="logar" onclick="login()">Entrar</button>
        </div>
        `
        return paginaDeLogin
    }
   function lerContas(){
        let confirmar = {}

        confirmar.nome2 = document.querySelector('.nome2').value;
            confirmar.senha2 = document.querySelector('.senha2').value;
            return confirmar
    }
      function  login(){
            let confirmar = this.lerContas
        if(this.confirmar ==  this.contas){
            alert("sucesso")
            location.href="pagina3.html"
        }else{
            alert("usuario ou senha esta incorreta")
        }
        return confirmar
    };
