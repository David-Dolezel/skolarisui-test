describe('Demo school dashboard', () => {
	beforeEach(() => {
		cy.login('testuser@skolaris.net', 'skolaristesting');
		cy.activateOrganisation(1257163);
		cy.visit('/');
		cy.contains('Dashboard', { 'timeout': 10000 });
	});

	it('Opens a class group', () => {
		cy.visit('#classgroups/1257167');
	});
});

