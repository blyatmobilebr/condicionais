//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;


function extrato(valorDoProduto, qtdParcelas, valorPago) {
    let valorRestante = (valorDoProduto / 100 - valorPago);
    let qtdParcela = (valorRestante / qtdParcelas) / 10
    let valorParcela = valorRestante / qtdParcela

    return `Restam ${qtdParcela} parcelas de R\$${valorParcela}`
}


console.log(extrato(100000, 10, 200));