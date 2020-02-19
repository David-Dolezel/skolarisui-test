describe('Demo school dashboard', () => {
	beforeEach(() => {
		cy.login();
		cy.activateOrganisation();
		cy.visit('/');
		cy.contains('Dashboard', { 'timeout': 10000 });
	});

	it('Shows class groups, teachers and subjects', () => {
		cy.contains('Demo school');
		cy.contains('Class groups');
		cy.contains('5A');
		cy.contains('Teachers');
		cy.contains('Alan Turing');
		cy.contains('Subjects');
		cy.contains('Garden Work');
	});

	it('Activates term Spring 2020', () => {
		cy.contains('Spring 2020');
	});
});

