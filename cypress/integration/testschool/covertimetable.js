describe('Test school cover assignment', () => {
	beforeEach(() => {
		cy.login('testuser@skolaris.net', 'skolaristesting');
		cy.activateOrganisation(1257163);
		cy.visit('/#covertimetable/1257202/58');
		cy.contains('Cover assignment', { 'timeout': 20000 });
	});

	it('Opens cover lesson popup', () => {
		cy.get('.open-cover:first')
			.click();

		cy.contains('Cover lesson:');
	});

	it('Hides the required cover decoration icon when cover is created', () => {
		cy.get('iron-icon.requires-cover:visible:first')
			.as('requiredCoverDecoration')
			.parent()
			.find('.open-cover')
			.click();

		cy.get('paper-icon-button.popup-close-cross')
			.click();

		cy.get('popup-viewer > .content')
			.should('not.be.visible');

		cy.get('@requiredCoverDecoration')
			.should('not.be.visible');
	});

	it('Hides the incomplete cover decoration icon when cover is deleted', () => {
		cy.on('uncaught:exception', Cypress.Skolaris.ignoreWebComponentsError);

		cy.get('iron-icon.covered.warning:visible:first')
			.as('incompleteCoverDecoration')
			.parent()
			.find('.open-cover')
			.click();

		cy.get('popup-viewer paper-icon-button[icon="icons:more-vert"]')
			.as('menu')			
			.click()

		cy.get('@menu')
			.parent()
			.find('paper-icon-item[data-bind^="click: delet"]')
			.click();

		cy.get('paper-button[dialog-confirm]')
			.click();

		cy.get('popup-viewer > .content')
			.should('not.be.visible');

		cy.get('@incompleteCoverDecoration')
			.should('not.be.visible');
	});
});

