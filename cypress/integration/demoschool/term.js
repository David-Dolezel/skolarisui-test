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

	it('Walks through term config wizard', () => {
		openOptimisationSettings();
		cy.get('.settings paper-button.primary')
			.click(); //runs term config wizard

		wizardNext(); //passes to class group settings
		wizardNext(); //passes to lecturer settings
		wizardNext(); //passes to finish screen

		cy.get('.wizard-wrapper paper-button.primary')
			.click(); //exit wizard
	});

	function openOptimisationSettings() {
		cy.get('[icon="icons:settings"]:visible')
			.click();
	}

	function wizardNext() {
		cy.get('[icon="icons:chevron-right"]')
			.click();
	}
});

