/// <reference types="cypress" />

var faker = require('faker-br');
// const quantidade = faker.random.number({ min: 1, max: 4 })
const quantidade = 3
import HomeProduto from './../support/pages/home/produtos'



context('Funcionalidade Página de produtos', () => {
    //Devido a falha ao localizar o produto, vou fazer um cy.visit para entrar no produto
    beforeEach(() => {
        cy.visit('/product/abominable-hoodie/')
    });

    //uma das regras de boas práticas utilizando o Cypress,seria não criar pequenos testes com  poucas validações, por ser custoso para ao processo de CI
    //Então vou continuar o teste de inclusão do produto ao carrinho nesme mesmo teste.
    //em uma futura refatoração, utilizar comandos customizados para diminuir a repetição de código
    // E unir alguns fluxos de testes em um mesmo teste.
    it('Deve selecionar um produto da lista e adiciona-lo no carrinho', () => {
        HomeProduto.clickButtonXS()
        HomeProduto.clickColorGreen()
        HomeProduto.insertQuantity(quantidade)
        HomeProduto.addProductToCart()
        HomeProduto.findMiniCartItems(quantidade)
        HomeProduto.findMessageItems(quantidade)
    });

});