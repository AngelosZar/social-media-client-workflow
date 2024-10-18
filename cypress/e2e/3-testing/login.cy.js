describe('Login Function', () => {
    beforeEach(() => {
        cy.visit('./');
    });
    // successfull login
    it('should login successfully and save user data', () => {
        cy.login();
        cy.url().should('include', 'profile');
        cy.get('button[data-auth="logout"]').should('be.visible');
    });

    // log out user to test failed login

    // unsuccessfull login
    it('should handle failed login with incorrect credentials', () => {
        const wrongEmail = 'wrong@email.com';
        const wrongPassword = 'justwrong';
        // cy.loginFail(wrongEmail, wrongPassword);
    });
});
