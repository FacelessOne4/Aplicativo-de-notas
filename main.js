function verificarNota() {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let nota4 = Number(document.getElementById("nota4").value);

    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    let resultado = "";

    if (media >= 0 && media <= 4.9) {
        resultado = '<span style="color: red;">Aluno Reprovado</span>';
    } 
    else if (media >= 5 && media <= 6.9) {
        resultado = '<span style="color: orange;">Aluno em Recuperação</span>';
    } 
    else if (media >= 7 && media <= 10) {
        resultado = '<span style="color: green;">Aluno Aprovado</span>';
    } 
    else {
        resultado = '<span style="color: gray;">Notas inválidas</span>';
    }

    document.getElementById("resultado").innerHTML =
        "Média: " + media.toFixed(1) + "<br>Situação: " + resultado;
}