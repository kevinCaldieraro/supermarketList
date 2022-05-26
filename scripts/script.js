let produtos = document.getElementById("produtos");
let textTotal = document.getElementById("total");
let n = document.getElementById("nome");
let v = document.getElementById("valor");
let qtd = document.getElementById("qtd");

let tt = 0;

function cadastrar() {
    let nome = n.value;
    let valor = v.value;
    let unidades = qtd.value;
    let int = Number.isInteger(parseFloat(unidades));

    if (nome != 0 && valor != 0 && unidades != 0 && int == true) {
        produtos.innerHTML += `<p>${nome} <strong>x${unidades}</strong>

        <span class="spanPrice">preço: R$<strong>${parseFloat(valor).toFixed(2)}</strong></span><span class="totalSpan">total: R$<strong id="decrescimo">${(valor * unidades).toFixed(2)}</strong></span>

        <button class="delete" onclick = "apagar(this)"><img src="./assets/delete.png"></button></p>`;

        calcTotal(valor, unidades);

        document.getElementById("nome").value = "";
        document.getElementById("valor").value = "";
        document.getElementById("qtd").value = "";

    } else {
        alert("Preencha os campos com valores possíveis para cadastrar!");
    }
}

function calcTotal(t, u) {
    let numPrice = parseFloat(t);
    let numUnidade = parseFloat(u);

    tt += numPrice * numUnidade;

    return textTotal.innerHTML = "Total da compra: R$" + tt.toFixed(2);
}

function apagar(e) {
    let parent = e.parentElement;
    let pc = parent.children[2];
    let pcc = pc.children[0];

    let menosValor = pcc.innerHTML;

    tt -= parseFloat(menosValor);

    e.parentElement.remove();

    return textTotal.innerHTML = "Total da compra: R$" + tt.toFixed(2);
}

function limpar() {
    produtos.innerHTML = "";
    textTotal.innerHTML = "Total da compra: R$0.00";
    tt = 0;
}