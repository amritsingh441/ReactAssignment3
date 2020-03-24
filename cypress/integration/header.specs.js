describe("UI Testing for header component", () => {
    beforeEach(()=>{
        cy.visit("/");
        cy.get('input[id=userId]').type('admin');
        cy.get('input[id=usrPassword]').type('password');
        cy.get('#loginBtn').click();
        cy.url().should('include','3000/dashboard');
    })

    it("Header dashboard button validation success", () => {
        cy.get('#dashBoardBtn').click();
        cy.url().should('include','3000/dashboard');
    })

    it("Header readNow button validation success", () => {
        cy.get('#readNowBtn').click();
        cy.url().should('include','3000/readnow');
    })
})