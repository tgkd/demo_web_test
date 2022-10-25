describe('pages spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('successfully loads home page', () => {
    cy.get('.nav').contains('Posts');
  });

  it('successfully loads about page', () => {
    cy.get('.nav').contains('About').click();
    cy.url().should('include', '/about');
  });

  it('successfully loads posts page', () => {
    cy.get('.nav').contains('Posts').click();
    cy.url().should('include', '/posts');
  });

  it('successfully loads post details', () => {
    cy.get('.nav').contains('Posts').click();
    cy.url().should('include', '/posts');
    cy.get('ol').children('li').children('a').first().click();
    cy.get('p').contains(/\w/);
  });
});
