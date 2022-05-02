let quitanda = ["Manga", "Açai", "Banana", "Melão", "Uva"]
let valor = [4.75, 7, 3.25, 4, 6.50]
let carrinhoCompra = []
let total = 0

function clic(event) {
    let frutas = event.target
    let position = frutas.id
    adicionarCarrinho(position)
    precoTotal(position)
}

document.addEventListener('DOMContentLoaded', () => {
    let itens = document.getElementById("produtos")
    itens.addEventListener('click', clic)

})

function precoTotal(position){ 
    let cesta = document.getElementById("mostraTotalCompra").innerHTML
    total = total + valor[position]
    cesta = `R$ ${total.toFixed(2)}`
    document.getElementById("mostraTotalCompra").value = cesta
}

function adicionarCarrinho(position) {
    if (carrinhoCompra.includes(position)) {
        alert(`O item ${quitanda[position]} já se encontra na sua cesta`)
    } else {
        let sacola = document.getElementById("cestaDoCliente").innerHTML
        sacola = sacola + "<li>" + quitanda[position] + "</li>"
        document.getElementById("cestaDoCliente").innerHTML = sacola

        carrinhoCompra.push(position)
    }

}


