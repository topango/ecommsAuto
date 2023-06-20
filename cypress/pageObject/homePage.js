/// <reference types="cypress" />

class HomePage {

    categoryDropdown() {
        return cy.get('select#category');

    }

    searchForProductField() {
        return cy.get("input[placeholder='Search for products']");

    }

    searchButton() {
        return cy.get('button[data-testid=search-btn]');

    }

    sainsbusryLogo() {
        return cy.get('[data-testid=sainsburys-logo-link]');

    }

    argosLogo() {
        return cy.get('[data-testid=argos-logo]');

    }

    tuLogo() {
        return cy.get('[data-testid=tu-logo]');

    }

    habitatLogo() {
        return cy.get('[data-testid=habitat-logo]');

    }

    nectarLogo() {
        return cy.get('[data-testid=nectar-logo]');

    }



    helpCenter() {
        return cy.get('[data-testid=help-centre-link]');

    }

    storeLocator() {
        return cy.get('[data-testid=store-locator-link]');

    }

    login() {
        return cy.get('[data-testid=loginForm]');

    }




}
export default HomePage;