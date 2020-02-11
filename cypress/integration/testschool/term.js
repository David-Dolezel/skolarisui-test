describe('Test school term screen', () => {
	beforeEach(() => {
		cy.login('testuser@skolaris.net', 'skolaristesting');
		cy.activateOrganisation(1257163);
		cy.visit('/#terms/1257164');
		cy.contains('Spring 2020', { 'timeout': 10000 });
	});

	it('Shows day names and period times in the term screen', () => {
		cy.get('.cell.day paper-input[label="Name"]:first')
			.should('have.value', 'Monday');

		cy.get('.cell.period paper-input[label="To"]:first')
			.should('have.value', '08:50');
	});

	it('Walks through term config wizard', () => {
		toggleOptimisationSettings();
		cy.get('.settings paper-button.primary')
			.click(); //runs term config wizard

		wizardNext(); //passes to class group settings
		wizardNext(); //passes to lecturer settings
		wizardNext(); //passes to finish screen

		cy.get('.wizard-wrapper paper-button.primary')
			.click(); //exit wizard

		toggleOptimisationSettings();
	});

	function toggleOptimisationSettings() {
		cy.get('paper-icon-button[alt="optimisation settings"]')
			.click();
	}

	function wizardNext() {
		cy.get('[icon="icons:chevron-right"]')
			.click();
	}
});

