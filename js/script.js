var cesta_frutas = [];

function adicionar() {
    //var item = document.getElementById("item").value;
    var item = $("#item").val();
    cesta_frutas.push(item);
    //alert(cesta_frutas);
    //var cesta = document.getElementById("cesta");
    //cesta.innerHTML = cesta_frutas;
    if(item === "x") {
        $("#cesta").slideUp(900);
    } else {
        $("#cesta").append("<p id='idItem'>"+ item + "</p>").slideDown(900);
    }}

    function remover() {
        var item = $("#item").val();
        cesta_frutas.pop(item);
        console.log(cesta_frutas);               
    }