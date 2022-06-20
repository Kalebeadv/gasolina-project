var usuarios = [
    {"login": "kalebe", "senha": "tf2"},
    {"login": "carlos", "senha": "elas"},
    {"login": "gustavo", "senha": "123"},
];

function entrar_() {
    var usuario = document.getElementById('username').value.toLowerCase();
    var senha = document.getElementById('password').value;
    
    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
           window.location.href = "http://localhost:80/site/Admin-site/index.html"
        }
    }
    alert("Dados incorretos, tente novamente.");
}
