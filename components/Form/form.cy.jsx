import Form from './index';
import mockForm from '../../cypress/fixtures/form.json';

describe('<Form>', () => {
  it('renders without crashing', () => {
    cy.mount(<Form />);
    cy.get('form').should('exist');
  });

  it('submit', () => {
    const onSubmitSpy = cy.spy().as('onChangeSpy');
    cy.mount(<Form handleSubmit={onSubmitSpy} />);
    cy.get('input')
      .first()
      .type(mockForm.email)
      .should('have.value', mockForm.email);
    cy.get('input')
      .last()
      .type(mockForm.password)
      .should('have.value', mockForm.password);
    cy.get('form').submit();
    cy.get('@onChangeSpy').should('be.calledWith', mockForm);
  });
});
