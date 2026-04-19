// script.js corrigido

// LISTA DE USUÁRIOS FIXOS
const usuarios = [
    {
        login: "marcelo",
        senha: "123456",
        tipo: "professor"
    },
    {
        login: "aluno1",
        senha: "111111",
        tipo: "aluno"
    },
    {
        login: "aluno2",
        senha: "222222",
        tipo: "aluno"
    },
    {
        login: "juquinha",
        senha: "197550",
        tipo: "aluno"
    }
];


// FUNÇÃO DE LOGIN
function fazerLogin() {
    let usuario = document.getElementById("usuario").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let mensagem = document.getElementById("mensagem");

    // procura nos usuários fixos
    const usuarioEncontrado = usuarios.find(user =>
        user.login === usuario && user.senha === senha
    );

    // procura nos usuários cadastrados pelo navegador
    let senhaSalva = localStorage.getItem(usuario);

    if (
        usuarioEncontrado ||
        senhaSalva === senha
    ) {
        window.location.href = "index.html";
    } else {
        mensagem.style.color = "red";
        mensagem.innerHTML = "Usuário ou senha incorretos!";
    }
}


// FUNÇÃO DE CADASTRO
function cadastrarUsuario() {
    let novoUsuario = document.getElementById("novoUsuario").value.trim();
    let novaSenha = document.getElementById("novaSenha").value.trim();
    let mensagem = document.getElementById("mensagem");

    if (novoUsuario === "" || novaSenha === "") {
        mensagem.style.color = "red";
        mensagem.innerHTML = "Preencha todos os campos!";
        return;
    }

    // salva no navegador
    localStorage.setItem(novoUsuario, novaSenha);

    mensagem.style.color = "green";
    mensagem.innerHTML = "Cadastro realizado com sucesso!";
}