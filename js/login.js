function verifica() {
    let email = document.querySelector("#username").value;
    let senha = document.getElementById('password').value;

    if (email == "" || senha == "") {
        alert("Obrigatorio o preenchimento de todos campos ")
        document.querySelector("#username").focus()
    } else {
        pesquisa(email, senha);
    } 
}
function pesquisa(email, senha) {
    if (email == "bruno.rafael1510@gmail.com" && senha == "123456") {
        window.open("index.html")
    }

}

