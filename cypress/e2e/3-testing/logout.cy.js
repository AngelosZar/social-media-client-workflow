describe('Logout Function', () => {
    beforeEach(() => {
        cy.visit('./');
    });
    it('should logout successfully and remove user data', () => {
        cy.login();
        cy.wait(1000);
        // get the logout button / element/
        cy.url().should('include', 'profile');

        // click on logout btn
        cy.get('button[data-auth="logout"]').click();
        cy.wait(1000);
        cy.window().its('localStorage.token').should('be.undefined');
        // make sure the user is redirected to the login page
        cy.get('#registerModal').should('be.visible');
        cy.wait(1000);
    });
});
