/// <reference types="Cypress"/>
describe("Emag home Search function",()=>{
    var EmagSearch = require("../../EmagSearch.json");
    // it("Chech Search function",()=>{
    //     cy.visit("https://www.emag.ro/");
    //     cy.get('#searchboxTrigger').type("ceasuri femei");
    //     cy.get('.searchbox-submit-button > .em').click();
    //     cy.get('body').click({force:true});
    //     cy.get('.gdpr-cookie-banner').click({force:true});
    //     cy.get('.listing-panel-heading').should("contain","ceasuri femei").click({force:true});
    //     cy.get('.col-sm-5 > .btn-primary').click({force:true});
    // });    

    // it("Chech Search function",()=> {   
    //         cy.visit("https://www.emag.ro/"); 
    //         cy.get('#searchboxTrigger').type("ceasuri barbati");
    //         cy.get('.searchbox-submit-button > .em').click();
    //         cy.get('body').click({force:true});
    //         cy.get('.gdpr-cookie-banner').click({force:true});
    //         cy.get('.listing-page-title').should("contain","ceasuri barbati").click({force:true});
    // });

    EmagSearch.globalsearch.forEach((temp) => {
        it("globalsearch", () => {
        // it.only("globalsearch" + temp.searchterm + " " + temp.searchterm,()=>{
            cy.visit("https://www.emag.ro/");
            cy.get('.searchbox-submit-button > .em').click();
            cy.get('#searchboxTrigger').type(temp.searchterm);
            cy.get('.searchbox-submit-button > .em').click();
            cy.get('.col-sm-5 > .btn-primary').click();
        });
    });

});



