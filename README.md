# nth-rocks

Biblioteca em SCSS que permite a utilização de várias colunas com alturas diferentes, sem que as mesmas quebrem, ou se comportem de forma inadequada.

#### Com
![com](https://raw.githubusercontent.com/alisonmonteiro/nth-rocks/master/example/com.png)
#### Sem
![sem](https://raw.githubusercontent.com/alisonmonteiro/nth-rocks/master/example/sem.png)

## Utilização

Você pode adicionar as classes ao seu elemento com a seguinte estrutura:
- [Prefixo da resolução desejada]-[Quantidade de colunas nesta resolução]

Tudo deve funcionar muito bem!

Por exemplo:
~~~html
<ul class="nth-phone-2 nth-tablet-4 nth-desktop-3 nth-larger-desktop-4"
~~~

Nesse caso, serão exibidas 2 colunas na resolução de smarphone, 4 colunas na resolução de tablet, 3 colunas em monitores pequenos e 4 colunas em monitores maiores.

Veja um exemplo: https://github.com/alisonmonteiro/nth-rocks/blob/master/example/index.html

## TODO
- [ ] Add github-page
- [ ] Add bower.json
- [ ] Add opção `nth-rocks.less`
- [ ] Short classes
- [Ver issues](https://github.com/alisonmonteiro/nth-rocks/issues)
