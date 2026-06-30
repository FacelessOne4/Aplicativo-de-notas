function verificarNota() {
    let nota = Number(document.getElementById("nota").value);
    let resultado = "";

    if (nota >= 0 && nota <= 4.9) {
        resultado = "Aluno Reprovado";
    } 
    else if (nota >= 5 && nota <= 6.9) {
        resultado = "Aluno em Recuperação";
    } 
    else if (nota >= 7 && nota <= 10) {
        resultado = "Aluno Aprovado";
    } 
    else {
        resultado = "Nota inválida";
    }

    document.getElementById("resultado").innerText =
        "Situação: " + resultado;
}