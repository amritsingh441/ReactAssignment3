describe("UI Testing for header component", () => {
    beforeEach(()=>{
        cy.visit("/");
    })

    it("Header dashboard button validation success", () => {
        cy.get('input[id=userId]').type('admin');
        cy.get('input[id=usrPassword]').type('password');
        cy.get('#loginBtn').click();
        cy.get().should('include','3000/dashboard');
        cy.get('#dashBoardBtn').click();
        cy.get().should('include','3000/dashboard');
    })

    it("Header readNow button validation success", () => {
        cy.get('input[id=userId]').type('admin');
        cy.get('input[id=usrPassword]').type('password');
        cy.get('#loginBtn').click();
        cy.get().should('include','3000/dashboard');
        cy.get('#readNowBtn').click();
        cy.get().should('include','3000/readnow');
    })
})