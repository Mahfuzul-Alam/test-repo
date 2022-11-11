class ProductPage {

    checkOutButton() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')

    }

    checkOutButtonClick() {
        return cy.get(':nth-child(4) > :nth-child(5) > .btn')
    }
    getCountry() {
        return cy.get('#country')
    }


}
export default ProductPage;