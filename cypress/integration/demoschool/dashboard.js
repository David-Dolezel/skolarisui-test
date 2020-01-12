describe('Demo school dashboard', () => {
  beforeEach(() => {
	  cy.login();
	  cy.activateOrganisation();
	  cy.visit('/');
  });

  it('Successfully activates', () => {
    cy.contains('Dashboard');
    cy.contains('Demo school');
	cy.contains('Class groups');
	cy.contains('5A');
	cy.contains('Teachers');
	cy.contains('Alan Turing');
	cy.contains('Subjects');
	cy.contains('Garden Work');
  });
});

