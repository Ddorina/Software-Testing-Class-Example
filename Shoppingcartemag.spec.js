// /// <reference types="Cypress"/>
// describe("Emag Shopping cart function",()=>{
//     it ("Testing Adding Product to the Shopping cart", () => {
//         cy.visit("https://www.emag.ro/"); 
//         cy.get('#searchboxTrigger').type("masini spalat ");
//         cy.get('.searchbox-submit-button > .em').click();
//         cy.get('body').click({force:true});
//         cy.get('.gdpr-cookie-banner').click({force:true});
//         cy.get('.listing-page-title').should("contain","masini spalat").click({force:true});
//         cy.get('[data-name="Masina de spalat rufe Slim Arctic APL61015XLW0 , 6 kg, 1000 RPM, Clasa A+++, ExtraSteam, Display LED, XL Door, Alb"] > .card > .card-section-wrapper > .card-section-btm > .card-footer > form > .btn').click();
//     })
// })   

    / <reference types="Cypress"/>
    describe("Emag Shopping cart function",()=>{
    it ("Testing Change quantity for a product from shopping cart", () => {
        cy.visit("https://www.emag.ro/"); 
        cy.get('#searchboxTrigger').type("masini spalat ");
        cy.get('.searchbox-submit-button > .em').click();
        cy.get('body').click({force:true});
        cy.get('.gdpr-cookie-banner').click({force:true});
        cy.get('.listing-page-title').should("contain","masini spalat").click({force:true});
        cy.get('[data-name="Masina de spalat rufe Slim Arctic APL61015XLW0 , 6 kg, 1000 RPM, Clasa A+++, ExtraSteam, Display LED, XL Door, Alb"] > .card > .card-section-wrapper > .card-section-btm > .card-footer > form > .btn').click();
        // cy.get('.btn btn-primary btn-sm btn-block').click();
        cy.get('.col-sm-2 > .btn-primary').click({force:true});
        cy.get('.select2-selection').click();
        cy.wait(300);
        // cy.get('#vendorsContainer > div > div.cart-widget.cart-line > div > div.main-product-details-container.emg-right > div.line-item.line-item-main > div.line-qty-container.emg-left').click();
         cy.get('.select2-results__options > li:nth-child(2)').click({force:true});
       
        // cy.get('b').click();
        // cy.get('#select2-89h2-container').click();
        

        
    });
})       