describe('Test school cover lesson', () => {
	beforeEach(() => {
		cy.login('testuser@skolaris.net', 'skolaristesting');
		cy.activateOrganisation(1257163);
		cy.visit('/#covertimetable/1257202/58');
		cy.contains('Cover assignment', { 'timeout': 20000 });
		cy.get('.open-cover:first').click();
		cy.contains('Cover lesson:');
	});

	it('Teacher name is wide enough in the available teachers table', () => {
		cy.get('td.name')
			.invoke('width').should('be.gte', 128);
	});
});

