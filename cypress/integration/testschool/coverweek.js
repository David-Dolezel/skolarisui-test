describe('Test school cover week', () => {
	beforeEach(() => {
		cy.login('testuser@skolaris.net', 'skolaristesting');
		cy.activateOrganisation(1257163);
		cy.visit('/#coverweeks/1257215');
		cy.contains('Calendar week starting', { 'timeout': 20000 });
	});

	it('Opens cover assignment screen', () => {
		cy.on('uncaught:exception', Cypress.Skolaris.ignoreWebComponentsError);

		//select the active timetable
		cy.get('paper-dropdown-menu')
			.as('menu')
			.click();

		cy.get('@menu')
			.shadowFind('paper-item:last')
			.click();

		//assign cover
		cy.get('paper-fab')
			.click();
		
		cy.url().should('include', 'covertimetable/1257202/58');
	});
});

