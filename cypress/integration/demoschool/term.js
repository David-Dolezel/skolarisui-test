describe('Demo school term screen', () => {
  beforeEach(() => {
	cy.login();
	cy.activateOrganisation();
	cy.visit('/#terms/298550');
  }); 

  it('Shows day names in the term screen', () => {
	cy.get('.day paper-input[data-bind="label: $parent.locale().common.name, validInput: name, enable: $parent.enable"]:first')
	  .should('have.value', 'Monday');
  });
  
  it('Shows period times in the term screen', () => {
	cy.get('.period paper-input[data-bind="label: $parent.locale().period.to, timepicker: to, enable: $parent.enable"]:first')
	  .should('have.value', '07:55');
  });
});

