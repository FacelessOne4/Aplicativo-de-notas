function verificarNota() {
    let nota = Number(document.getElementById("nota").value);
    let resultado = "";

    if (nota >= 0 && nota <= 4.9) {
        resultado = '<span style="color: red;">Aluno Reprovado</span>';
    } 
    else if (nota >= 5 && nota <= 6.9) {
        resultado = '<span style="color: orange;">Aluno em Recuperação</span>';
    } 
    else if (nota >= 7 && nota <= 10) {
        resultado = '<span style="color: green;">Aluno Aprovado</span>';
    } 
    else {
        resultado = '<span style="color: gray;">Nota inválida</span>';
    }

    document.getElementById("resultado").innerHTML =
        "Situação: " + resultado;
}