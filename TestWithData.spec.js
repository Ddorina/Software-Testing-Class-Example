/// <reference types="Cypress"/>
describe("Testing Login with multiple data",()=>{
    var testData= require("../../LoginTestData.json");
    console.log(testData);
    
    it("Login with good data",()=>{
        cy.visit("www.minuneanaturii.ro");
        cy.get('.js-account-source > ul > li > .account-link > a').click({force:true});
    });
    
    testData.badlogin.forEach((temp)=>{
        it.only("Login with bad data" + temp.username + " " + temp.password,()=>{
            cy.visit("www.minuneanaturii.ro");
            cy.get('.js-account-source > ul > li > .account-link > a').click({force:true});
            cy.get('.col-lg-6 > .form-control').type(temp.username);
            cy.get('.input-group > .form-control').type(temp.password);
            cy.get('#submit-login').click({force:true});
        });   
    });
});