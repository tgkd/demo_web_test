import mockUser from '../fixtures/session.json';

describe('auth', () => {
  it('should show private content', () => {
    cy.login(mockUser.user);
    cy.visit('/');
    cy.get('nav').contains('Profile').click();
    cy.get('p').should('contain', 'This is a protected page.');
  });
});
