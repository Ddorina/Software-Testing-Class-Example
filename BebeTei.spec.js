/// <reference types="Cypress"/>

describe("BebeTei Search Function", () => {
    var testdatabb = require("../../testdatabb.json");
    // it("Check Search Bar visibility", () => {
    //     cy.visit("https://comenzi.bebetei.ro/");
    //     cy.get('#search').should("be.visible");
    // })
    // it("Check Search Button visibility", () => {
    //     cy.visit("https://comenzi.bebetei.ro/");
    //     cy.get('#submit-button').should("be.visible");
    // })
    // it("Check search function", () => {
    //     cy.visit("https://comenzi.bebetei.ro/");
    //     cy.get('#search').type("scutece");
    //     cy.get('#submit-button').click();
    // })
    // it.only("Search function - Error message", () => {
    //     cy.visit("https://comenzi.bebetei.ro/");
    //     cy.get('#search').type("askfjhadskjfgh");
    //     cy.get('#submit-button').click();
    //     cy.get("#page > section > div > div > div.col-sm-9.col-xs-12.main-wrapper > article > div:nth-child(1) > div").should("contain","Produsul nu a fost gasit");
    // })
    testdatabb.one.forEach((temp) => {

        it("Special characters", () => {
             cy.visit("https://comenzi.bebetei.ro/");
             cy.get('#search').type(temp.one);
             cy.get('#submit-button').click();
        })
    })
})