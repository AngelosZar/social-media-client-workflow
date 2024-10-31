Work flow Project

Main Dependencies

1.bootstrap-dark-5 (v1.1.3)

Development Dependencies

1. @babel/core (v7.25.8) and @babel/preset-env (v7.25.8)
2. @eslint/js (v9.12.0) and eslint (v9.12.0)
3. cypress (v13.15.0) and eslint-plugin-cypress (v4.0.0)
4. eslint-config-prettier (v9.1.0) and eslint-plugin-prettier (v5.2.1)
5. eslint-plugin-jest (v28.8.3)
6. globals (v15.11.0)
7. husky (v9.1.6)
8. jest (v29.7.0)
9. lint-staged (v15.2.10)
10. live-server (v1.2.2)
11. prettier (v3.3.3)
12. sass (v1.79.5)

Scripts

- build: Compiles Sass files to CSS.
- start: Watches Sass files for changes and starts a live server.
- test: Runs both unit tests and end-to-end tests.
- unit-test: Runs Jest unit tests.
- test-e2e: Opens Cypress for interactive end-to-end testing.
- test-e2e-cli: Runs Cypress tests in CLI mode.
- lint: Lints JavaScript files using ESLint.
- lint-fix: Lints and automatically fixes JavaScript files.
- format: Formats JavaScript files using Prettier.
- prepare: Installs Husky hooks.

Process :

-   Branches and environments

    1.Master (pull request to this branch for delivery)
    2.Workflow (Repo was initialized and dependencies were installed -all test branches were merged here)
    3.Workflow_tools ( ESlint ,prettier and husky)
    4.workflow_testing( jest and cypress installation ,configuration and creation of tests )

-   Developer tools

1. ESlint for code linting
2. Prettier for code formatting
3. Husky to create pre-commit hooks ( lint and format code before committing )

-   Unit testing using Jest

1. Jest installation and configuration
2. Creation of two test cases:
   i. The login function stores a token when provided with valid credentials
   ii. The logout function clears the token from browser storage

-   E2E testing with Cypress

1. Jest installation and configuration
2. Creation of three test cases:
   i. The user can log in with the login form with valid credentials
   ii. The user cannot submit the login form with invalid credentials and is shown a message.
   iii. The user can log out with the logout button
