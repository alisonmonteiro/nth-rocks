# nth-rocks

[![npm status](https://img.shields.io/npm/v/nth-rocks.svg)](https://www.npmjs.com/package/nth-rocks)

> Biblioteca em SCSS que permite a utilização de várias colunas com alturas distintas, sem que as mesmas se comportem de forma inadequada. Assim como mostra o exemplo abaixo.

#### Com
![com](https://raw.githubusercontent.com/alisonmonteiro/nth-rocks/master/example/com.png)
#### Sem
![sem](https://raw.githubusercontent.com/alisonmonteiro/nth-rocks/master/example/sem.png)

## Utilização

Veja algumas formas de utilizar o nth-rocks:

#### Diretamente no HTML:
~~~html
<ul class="nth-phone-2 nth-tablet-4 nth-desktop-3 nth-larger-desktop-4"
~~~

#### No seu arquivo .scss:
~~~scss
.your-element {
    @extend .nth-xs-2, .nth-sm-3, .nth-md-4, .nth-lg-6;
}
~~~

No caso do HTML, por exemplo, serão exibidas 2 colunas na resolução de smarphone, 4 colunas na resolução de tablet, 3 colunas em monitores pequenos e 4 colunas em monitores maiores.
Veja um exemplo [aqui](https://github.com/alisonmonteiro/nth-rocks/blob/master/example/index.html).

## TODO
- [ ] Add github-page
- [ ] Add bower.json
- [ ] Add opção `nth-rocks.less`
