Desafio-1-trilhas-desenvolvimento-mobile

Informações:
Nome: Kêylla Barbosa Pinto
Trilha: Desenvolvimento Web
Projeto: Desafio 1 — Minha Loja: Simulador de Compras


## Sobre o projeto

Este projeto foi desenvolvido como parte do Desafio 1 da trilha de Desenvolvimento Web.

A proposta é criar uma página de loja utilizando HTML, CSS e JavaScript.

A página apresenta os produtos disponíveis e o JavaScript permite simular uma compra, informando as quantidades desejadas, calculando os valores e apresentando o resultado.


Produtos

A loja possui os seguintes produtos:

- Headset Gamer — R$ 99,99
- Teclado Gamer — R$ 49,99
- Monitor 4K — R$ 999,99


Tecnologias:

- HTML5
- CSS3
- JavaScript

Ferramentas:

- Visual Studio Code, utilizado para desenvolver e editar o projeto.
- GitHub, utilizado para armazenar e disponibilizar o projeto.

Como executar o projeto:

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Abra o arquivo `index.html` no navegador.
4. Clique no botão "Simular compra".
5. Informe a quantidade desejada de cada produto.
6. Confira o resultado apresentado pelo JavaScript.

Testes realizados

Foram realizados alguns testes para verificar o funcionamento da simulação de compra.

Teste 1 — Compra de produtos

Foi informada uma quantidade maior que zero para os produtos, verificando se os valores e o total da compra eram calculados corretamente.

Teste 2 — Produto não selecionado

Foi informada a quantidade 0 para um produto, verificando se a compra continuava funcionando normalmente.

Teste 3 — Nenhum produto selecionado

Foi informada a quantidade 0 para todos os produtos, verificando se o sistema informava que nenhum produto havia sido selecionado.

Teste 4 — Desconto

Foi realizado um teste para verificar se a regra de desconto funcionava corretamente e se o valor final da compra era calculado.


Dificuldades e aprendizados:

Minha principal dificuldade durante o desenvolvimento foi aprender algumas funcionalidades do CSS.

Tive mais facilidade com HTML e JavaScript, pois já possuía mais experiência com essas tecnologias e me identifiquei mais com elas.

Durante o desenvolvimento, percebi que HTML, CSS e JavaScript trabalham juntos e que cada tecnologia possui uma função importante no projeto.

Mesmo tendo mais dificuldade com CSS, continuo estudando e praticando através das aulas da trilha de Desenvolvimento Web.


Uso de Inteligência Artificial:

Utilizei Inteligência Artificial como auxílio durante o desenvolvimento do projeto, principalmente para aprender novas funcionalidades e melhorar a aparência da página.

Um exemplo foi o uso do button:hover, que cria um efeito quando o mouse passa sobre o botão.

Um exemplo utilizado no projeto foi:

```css
button:hover {
    transform: translateY(-2px);

    box-shadow: 0 7px 15px rgba(34, 32, 153, 0.4);
}
