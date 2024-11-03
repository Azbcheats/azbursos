
let carrinho = [];

function adicionarAoCarrinho(nome, preco, quantidade) {
    const produtoExistente = carrinho.find(item => item.nome === nome);
    const quantidadeInt = parseInt(quantidade, 10);

    if (produtoExistente) {
        produtoExistente.quantidade += quantidadeInt;
    } else {
        carrinho.push({ nome, preco, quantidade: quantidadeInt });
    }

    alert(`${quantidadeInt} unidades de ${nome} foram adicionadas ao carrinho!`);
}

function finalizarCompra(event) {
    event.preventDefault();
    // Lógica para finalizar a compra
}

// Aqui você pode adicionar outras funções para atualizar o carrinho, etc.
