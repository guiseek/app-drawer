# Seletores CSS

Os Seletores definem quais elementos um conjunto de regras CSS se aplica.

## Seletores Básicos
Seletor por tag
Este seletor básico escolhe todos os elementos que correspondem ao nome fornecido.

### Sintaxe:
`nome-da-tag`

### Exemplo:
input corresponderá a qualquer elemento `<input>`.

## Seletor por classe
Este seletor básico escolhe elementos baseados no valor de seu atributo classe.

### Sintaxe:
`.nome-da-classe`

### Exemplo:
`.index` irá corresponder a qualquer elemento que tenha o índice de classe (provavelmente definido por um atributo `class="index"`, ou similar).

## Seletor por ID
Este seletor básico escolhe nós baseados no valor do atributo `id`. Deve existir apenas um elemento com o mesmo `ID` no mesmo documento.

### Sintaxe:
`#nome-do-id`

### Exemplo:
`#toc` irá corresponder ao elemento que possuir o `id=toc` (definido por um atributo `id="toc"`, ou similar).

## Seletores universais
Este seletor básico irá escolher todos os nós. Ele também existe em um namespace único e em uma variante de todo o namespace também.

### Sintaxe:
- `ns|*` - aplica a todos os elementos no namespace `ns`
- `*|*` - aplica a todos elementos
- `|*` - aplica a todos os elementos que não tem namespaces declarados

### Exemplo:
`*` irá corresponder a todos os elementos do documento.

## Seletores por atributo
Este seletor básico ira escolher nós baseados no valor de um de seus atributos, ou até mesmo pelo próprio atributo.

Sintaxe:
`[atrib]`, `[atrib=valor]`, `[atrib~=valor]`, `[atrib|=valor]`, `[atrib^=valor]`, `[atrib$=valor]`, `[atrib*=valor]` Exemplo: `[autoplay]` irá corresponder a todos os elementos que possuirem o atributo `autoplay` (para qualquer valor).


---

## Combinadores
Seletores de irmãos adjacentes
O combinador + seleciona os nós que seguem imediatamente o elemento especificado anteriormente. Sintaxe: `A + B` Exemplo: `ul + li` irá corresponder a qualquer elemento `<li>` que segue imediatamente após um elemento `<ul>`.

## Seletores gerais de irmãos
O combinador `~` seleciona os nós que seguem (não necessariamente imediatamente) o elemento especificado anteriormente, se ambos os elementos compartilham o mesmo pai. Sintaxe: `A ~ B` Exemplo: `p ~ span` irá corresponder a todo elemento `<span>` que seguir um elemento `<p>` dentro de um mesmo elemento pai.

## Seletor de filhos (en-US)
O combinador > seleciona nós que são filhos diretos do elemento especificado anteriormente. Sintaxe: `A > B` Exemplo: `ul > li` irá corresponder a todo elemento `<li>` que estiver diretamente dentro de um elemento `<ul>` especificado.

## Seletor de descendentes (en-US)
O combinador `" "` seleciona os nós que são filhos do elemento especificado anteriormente (não é necessário que seja um filho direto).
### Sintaxe:
`A B`

### Exemplo:
`div span` irá corresponder a todo e qualquer elemento `<span>` que estiver dentro do elemento `<div>`.

## Pseudo-classes
Pseudo-classes permitem selecionar elementos baseados em informações que não estão contidas na árvore de documentos como um estado ou que é particularmente complexa de extrair. Por exemplo, eles correspondem se um link foi visitado anteriormente ou não.

## Pseudo-elementos
Pseudo-elementos são asbtrações da árvore que representam entidades além do que o `HTML` faz. Por exemplo, o HTML não tem um elemento que descreva a primeira letra ou linha de um parágrafo, ou o marcador de uma lista. Os pseudo-elementos representam essas entidades e permitem que as regras CSS sejam associadas a elas. Desta forma, essas entidades podem ser denominadas independentemente.



| Seletor | Seleção | Tipo | Versão |
| --- | --- | --- | --- |
| `*` | Quaisquer elemento | universal | 2 | 
| `E` | Elementos tipo E | tipo | 1 | 
| `E[foo]` | Elementos com atributo foo | atributo | 2 | 
| `E[foo="bar"]` | Elementos E cujo valor do atributo foo é exatamente igual a bar | atributo | 2 | 
| `E[foo~="bar"]` | Elementos E cujo valor do atributo foo é uma lista de valores separados por espaço, um dos quais é exatamente igual a bar | atributo | 2 | 
| `E[foo^="bar"]` | Elementos E cujo valor do atributo foo começa exatamente com a string bar | atributo | 3 | 
| `E[foo$="bar"]` | Elementos E cujo valor do atributo foo termina exatamente com a string bar | atributo | 3 | 
| `E[foo*="bar"]` | Elementos E cujo valor do atributo foo contém a substring bar | atributo | 3 | 
| `E:root` | Elemento E raíz do documento | pseudo-classe | 3 | 
| `E:nth-child(n)` | Elemento E que é o enésimo filho do seu elemento pai | pseudo-classe | 3 | 
| `E:nth-last-child(n)` | Elemento E que é o enésimo filho (contado de trás para frente) do seu elemento pai | pseudo-classe | 3 | 
| `E:nth-of-type(n)` | Elemento E que é o enésimo irmão do seu tipo | pseudo-classe | 3 | 
| `E:nth-last-of-type(n)` | Elemento E que é o enésimo irmão (contado de trás para frente) do seu tipo | pseudo-classe | 3 | 
| `E:first-child` | Elemento E que é o primeiro filho do seu elemento pai | pseudo-classe | 2 | 
| `E:last-child` | Elemento E que é o último filho do seu elemento pai | pseudo-classe | 3 | 
| `E:first-of-type` | Elemento E que é o primeiro irmão de seu tipo | pseudo-classe | 3 | 
| `E:last-of-type` | Elemento E que é o último irmão de seu tipo | pseudo-classe | 3 | 
| `E:only-child` | Elemento E que é o único filho de seu elemento pai | pseudo-classe | 3 | 
| `E:only-of-type` | Elemento E que é irmão único do seu tipo | pseudo-classe | 3 | 
| `E:empty` | Elemento E que não tem elementos filhos (inclusive nós de texto) | pseudo-classe | 3 | 
| `E:link`, `E:visited` | Elemento E que sendo destino de um link ainda não foi visitado (:link) ou que já tenha sido visitado (:visited) | pseudo-classe | 1 | 
| `E:active`, `E:hover`, `E:focus` | Elemento E durante determinadas ações do usuário | pseudo-classe | 1.2 | 
| `E:target` | Elemento E que é o destino de um fragmento identificador de um URI | pseudo-classe | 3 | 
| `E:lang(pt-br)` | Elemento E em um determinado idioma - "exemplo: pt-br" | pseudo-classe | 2 | 
| `E:enabled`, `E:disabled` | Elemento E de uma interface de usuário que está habilitado (:enabled) ou desabilitado (:disabled) | pseudo-classe | 3 | 
| `E:checked` | Elemento E de uma interface de usuário que está marcado (:checked) (por exemplo: radio-button ou checkbox) | pseudo-classe | 3 | 
| `E:first-line` | Primeira linha formatada do elemento E | pseudo-elemento | 1 | 
| `E:first-letter` | Primeira letra formatada do elemento E | pseudo-elemento | 1 | 
| `E:before` | Conteúdo gerado antes do elemento E | pseudo-elemento | 2 | 
| `E:after` | Conteúdo gerado depois do elemento E | pseudo-elemento | 2 | 
| `E.foo` | Elemento E cujo valor da classe é foo | classe | 1 | 
| `E#foo` | Elemento E cujo valor do id é foo | id | 1 | 
| `E:not(selector)` | Elemento E que não casa com o seletor simples selector | pseudo-classe negação | 3 | 
| `E F` | Elemento F descendente do elemento E  | elemento descendente | 1 | 
| `E > F` | Elemento F filho do elemento E | elemento filho | 2 | 
| `E + F` | Elemento F imediatamente precedido pelo elemento E | elemento irmão adjacente | 2 | 
| `E ~ F` | Elemento F precedido pelo elemento E | elemento irmão geral | 3 | 

