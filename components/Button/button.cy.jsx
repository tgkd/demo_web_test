import Button from './index';

describe('<Button>', () => {
  it('renders without crashing', () => {
    cy.mount(<Button label="test" />);
    cy.get('button').should('exist');
  });

  it('clicked', () => {
    const onClickSpy = cy.spy().as('onChangeSpy');
    cy.mount(<Button label="test" onClick={onClickSpy} />);
    cy.get('button').click();
    cy.get('@onChangeSpy').should('have.been.calledOnce');
  });
});
