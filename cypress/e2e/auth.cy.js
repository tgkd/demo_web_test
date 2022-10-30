describe('auth page', () => {
  before(() => {
    cy.visit('/');
  });
  it('Login with Auth0', () => {
    const username = ''; // Cypress.env('GOOGLE_USER');
    const password = ''; // Cypress.env('GOOGLE_PW');
    const loginUrl = Cypress.env('SITE_NAME');
    const cookieName = Cypress.env('COOKIE_NAME');
  });
});
