describe("Testing Login with multiple data",()=>{
    var TestEmag= require("../../LoginTestEmag.json");
    console.log(TestEmag);
    
    it("Login with good data",()=>{
        cy.visit("www.emag.ro");
        cy.get('.dropdown-footer > .btn-primary').click({force:true});
        
        }
    );
    
    TestEmag.badlogin.forEach((temp)=>{
console.log(temp)
        it.only("Login with bad data",()=>{
            cy.visit("www.emag.ro");
            cy.get('.dropdown-footer > .btn-primary').click({force:true});
            cy.get('#user_login_email').type(temp.username);
            cy.get('#user_login_continue').type(temp.password).click({force:true});  
            
        });
    });

});    
