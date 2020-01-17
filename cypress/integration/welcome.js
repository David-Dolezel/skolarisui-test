describe('Dashboard for no active organisation', function() {
	beforeEach(() => {
		cy.login();
		cy.visit('/');
	});

	it('Successfully loads for guest', () => {
		cy.contains('Welcome to Skolaris');
		cy.contains('start working');
	});

	it('Offers the Demo school for activation', () => {
		cy.contains('activate an organisation');
		cy.contains('Demo school');
	});

	it('Activates Demo school', () => {
		cy.get('.card-actions > paper-button')
			.click();

		cy.url().should('include', '/#dashboard/organisation')
	});
});

