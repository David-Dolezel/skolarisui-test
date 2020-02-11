describe('Test school cover assignment', () => {
	beforeEach(() => {
		cy.login('testuser@skolaris.net', 'skolaristesting');
		cy.activateOrganisation(1257163);
		cy.visit('/#coverweeks/1257215');
		cy.contains('Calendar week starting', { 'timeout': 10000 });
	});

	it('Opens cover assignment screen', () => {
		//select the active timetable
		var ttmenu = cy.get('paper-dropdown-menu');
		ttmenu.click();

		ttmenu.shadowFind('paper-listbox')
			.shadowFind('paper-item')
			.shadowLast()
			.click();

		//assign cover
		cy.get('paper-fab')
			.click();
		
		cy.url().should('include', 'covertimetable/1257202/58');
	});
});

