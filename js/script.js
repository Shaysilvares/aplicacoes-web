var cesta_frutas = [];

function adicionar() {
    var item = document.getElementById("cesta").value;
    cesta_frutas.push(item);
    alert(cesta_frutas);
}