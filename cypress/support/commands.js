// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Successful login
Cypress.Commands.add(
    'login',
    (
        email = Cypress.env('userEmail'),
        password = Cypress.env('userPassword')
    ) => {
        cy.intercept(
            'POST',
            `${Cypress.env('API_BASE_URL')}/social/auth/login`,
            {
                statusCode: 200,
                body: {
                    accessToken: 'accessToken',
                    name: 'Test-randomUser',
                },
            }
        ).as('loginRequest');

        cy.intercept(
            'GET',
            // all profiles(/**) or specific profile(/social/profiles/1)
            `${Cypress.env('API_BASE_URL')}/social/profiles/**`,
            {
                statusCode: 200,
                body: {
                    name: 'Test-randomUser',
                    followers: [],
                    following: [],
                    posts: [],
                },
            }
        ).as('getProfile');
        // console elemtents
        // error targeting the correct btn
        cy.get('button').then(($buttons) => {
            cy.log(`Found ${$buttons.length} total buttons on the page`);
            $buttons.each((index, button) => {
                cy.log(
                    `Button ${index}: ${Cypress.$(button).text().trim()} - ${button.outerHTML}`
                );
            });
        });
        // register form
        cy.get('#registerModal').should('be.visible');
        cy.wait(1000);
        cy.get("#registerForm button[data-auth='login']").click();

        // Log in form
        cy.get('#loginModal').should('be.visible');
        cy.wait(1000);

        // credential input
        cy.get('#loginForm #loginEmail').type(email);
        cy.get('#loginForm #loginPassword').type(password);
        cy.wait(1000);

        // submit form
        cy.get("#loginForm button[type='submit'].btn-success").click();

        // wait for login request and save token
        cy.wait('@loginRequest').then((interception) => {
            expect(interception.response.statusCode).to.equal(200);
            const accessToken = interception.response.body.accessToken;
            window.localStorage.setItem('token', accessToken);
        });

        // Verify the url and profile request
        cy.url().should('include', 'profile');
        cy.wait('@getProfile').its('response.statusCode').should('eq', 200);

        // check if token is in localStorage
        cy.window().its('localStorage.token').should('eq', 'accessToken');
    }
);

// Unsuccessful login
// Cypress.Commands.add('loginFail', () => {});
//
// Successful logout
// Cypress.Commands.add('logout', () => {  })
