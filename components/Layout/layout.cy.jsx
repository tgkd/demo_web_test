import Layout from './index';

describe('<Layout>', () => {
  it('mounts', () => {
    cy.mount(<Layout />);
    cy.get('nav').children().first().should('have.text', 'Home');
  });
});
