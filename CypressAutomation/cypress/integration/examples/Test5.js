/// <reference types="Cypress" />

describe('My Fifthh Test Suite', function () {

    it('My FirstTest case', function () {

        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

            const text = $e1.text()
            if (text.includes("Python")) {

                cy.get('[name="courses"] tr td:nth-child(2)')
                    .contains('Python Language')
                    .next('td')
                    .should('have.text', 25)

            }

        })


    })


})