function simularCompra() {

    // Preços dos produtos
    const precoHeadset = 99.99;
    const precoTeclado = 49.99;
    const precoMonitor = 999.99;


    // Pergunta a quantidade de cada produto
    let quantidadeHeadset = Number(
        prompt("Quantos Headsets Gamer você deseja comprar?")
    );

    let quantidadeTeclado = Number(
        prompt("Quantos Teclados Gamer você deseja comprar?")
    );

    let quantidadeMonitor = Number(
        prompt("Quantos Monitores 4K você deseja comprar?")
    );


    // Calcula o valor de cada produto
    const totalHeadset =
        precoHeadset * quantidadeHeadset;

    const totalTeclado =
        precoTeclado * quantidadeTeclado;

    const totalMonitor =
        precoMonitor * quantidadeMonitor;


    // Calcula o subtotal
    const subtotal =
        totalHeadset +
        totalTeclado +
        totalMonitor;


    // Verifica se nenhum produto foi escolhido
    if (
        quantidadeHeadset === 0 &&
        quantidadeTeclado === 0 &&
        quantidadeMonitor === 0
    ) {
        alert("Nenhum produto foi selecionado.");
        return;
    }


    // ==================================
    // VERIFICAÇÃO DO DESCONTO
    // ==================================

    let desconto = 0;

    if (subtotal >= 500) {

        // 10% de desconto
        desconto = subtotal * 0.10;

    }


    // Calcula o valor final
    const totalFinal = subtotal - desconto;


    // Mostra o resultado
    alert(
        "RESUMO DA COMPRA\n\n" +

        "HEADSET GAMER\n" +
        "Quantidade: " + quantidadeHeadset +
        "\nValor: R$ " + totalHeadset.toFixed(2) +

        "\n\nTECLADO GAMER\n" +
        "Quantidade: " + quantidadeTeclado +
        "\nValor: R$ " + totalTeclado.toFixed(2) +

        "\n\nMONITOR 4K\n" +
        "Quantidade: " + quantidadeMonitor +
        "\nValor: R$ " + totalMonitor.toFixed(2) +

        "\n\n----------------------\n" +

        "SUBTOTAL: R$ " +
        subtotal.toFixed(2) +

        "\nDESCONTO: R$ " +
        desconto.toFixed(2) +

        "\nTOTAL FINAL: R$ " +
        totalFinal.toFixed(2)
    );
}