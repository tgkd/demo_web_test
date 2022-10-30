import Header from './index';

describe('<Header>', () => {
  it('renders without crashing', () => {
    cy.mount(<Header />);
    cy.get('nav').should('exist');
  });

  it('nav links', () => {
    cy.mount(<Header />);
    cy.get('nav li').last().get('a').click();
    cy.url().should('include', '/');
  });
});
