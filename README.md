# webdesign

## Refs

Repo de fontes legais: https://www.fontsquirrel.com

Css Tricks: https://css-tricks.com/

Cubic Bezier: https://cubic-bezier.com/#.17,.67,.83,.67

Auto prefixer: https://autoprefixer.github.io/

## display

### block

Elementos de nível de bloco:

- Ocupa a area toda disponivel (largura toda da pagina ou container).

- Gera uma quebra de linha.

- Elementos: p, h1, div, ul, ol, li, footer.

### inline

Elemento de nível de linha:

- Funciona como se fosse uma linha.

- Não ocupa 100% do tamanho disponível (largura). Vai ter o tamanho suficiente para exibir o seu conteudo.

- Não gera quebra de linha.

Elementos: a, strong, b, em, i, span, img.

## position

Os positions `relative`, `absolute` e `fixed` só irão fazer efeito quando empregados juntamente com pelo menos uma das propriedades: `left`, `top`, `right` ou `bottom`.

### static (default)

A ordem que os elementos estão no html é a ordem que eles aparecem na tela.

### relative

Position relative é relativo a ele próprio. O elemento com position relative, anda para a direção (top, right, bottom, left) a quantidade de pixels definido, com base na sua própria posição original. O posicionamento original é preservado.

### absolute

Position absolute é relativo ao primeiro elemento posicionado que não é static (elemento pai que tem top ou right ou bottom ou left definido e que não é static). Caso não existir esse elemento, então o elemento de position absolute será relativo ao body. Muda o fluxo do documento.

### fixed

Position fixed sempre é relacionado a janela do browser. Sempre vai ficar fixo na tela. Muda o fluxo do documento.

### z-index (default: 0)

Como os elementos podem ser sobrepostos (position absolute e fixed mudam o fluxo do documento), a propriedade z-index define o que vem por cima de quem. O z-index maior, fica por cima dos outros.
