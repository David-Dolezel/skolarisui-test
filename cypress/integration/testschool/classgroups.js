describe('Test school class groups', () => {
	beforeEach(() => {
		cy.login('testuser@skolaris.net', 'skolaristesting');
		cy.activateOrganisation(1257163);
		cy.visit('#classgroups', { 'timeout': 10000 });
	});

	it('Opens list of class groups', () => {
	});

	it('Open new class group popup after clicking Create button', () => {
		cy.get('paper-fab').click();
		cy.contains('Create a new class group');
		cy.contains('Save')
			.parent()
			.should('have.prop', 'disabled');
	});
});

