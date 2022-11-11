/// <reference types="Cypress" />

import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'


describe('My Second Test Suite', function () {

    before(function () {
        // runs once before all tests in the block
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })



    it('My FirstTest case', function () {

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        const homePage = new HomePage()
        const productPage = new ProductPage()


        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneaur().should('be.disabled')
        homePage.getShopTab().click()





        this.data.productName.forEach(function (element) {

            cy.selectProduct(element)
        });

        productPage.checkOutButton().click()
        productPage.checkOutButtonClick().click()
        productPage.getCountry().type('India').click()
        cy.wait(1000)
        cy.get('.suggestions > ul > li > a').click()
        cy.get('.checkbox > label').click()
        cy.get('.ng-untouched > .btn').click()





    })
})