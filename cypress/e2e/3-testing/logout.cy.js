describe('Logout Function', () => {
    beforeEach(() => {
        cy.visit('./');
    });
    it('should logout successfully and remove user data', () => {
        cy.login();
        cy.wait(1000);
        // get the logout button / element/
        // cy.window().its('localStorage.token').should('eq', 'accessToken');
        // cy.url().should('include', 'profile');

        // click on logout btn
        // cy.get('button[data-auth="logout"]').click();
        // cy.url().should('include', 'login');

        // clear storage and check if token is removed
        // cy.window().its('localStorage.token').should('be.undefined');
    });
});
