/// <reference types="cypress" />
import { Given, When, Then, And, } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../pageObject/homePage";
const homePage = new HomePage();



Given('user navigate to the homepage', () => {
    cy.NavigateToPcUrl();
    cy.wait(1000)
});

Then('user is on the homepage', () => {
    homePage.sainsbusryLogo().should('be.visible');
});


When('user search for product as {string}', (products) => {
    homePage.searchForProductField().type(products);
});

And('user click on the search button', () => {
    homePage.searchButton().click();
    cy.wait(1000)
});

Then('I should see the searched results of the products', () => {
    cy.wait(1000)
    cy.get('[data-test-id=search-results-title]').should('be.visible');
});

When('user clicks on the help link', () => {
    homePage.helpCenter().click();
});

Then('user is on the help center page', () => {
    cy.wait(1000)
    cy.get('div > h1[itemprop=name]').should('be.visible');
    cy.get('#onetrust-accept-btn-handler').click();
});







