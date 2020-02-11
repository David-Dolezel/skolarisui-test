describe('Login and logout', function() {
	beforeEach(() => {
		cy.visit('/');
		cy.contains('Welcome to Skolaris', { 'timeout': 10000 });
	});

	it('Notifies about login error and shows forgot password link', () => {
		cy.get('form > paper-input[name="username"]')
			.shadowType('guest');

		cy.get('form > paper-input[name="password"]')
			.shadowType('badpassword');

		cy.get('form > paper-button')
			.click();

		cy.contains('user name or password is incorrect', { 'timeout': 10000 });
		cy.contains('Forgot password?');
	});

	it('Logs in to test account after typing in details manually', function() {
		cy.get('form > paper-input[name="username"]')
			.shadowType('testuser@skolaris.net');

		cy.get('form > paper-input[name="password"]')
			.shadowType('skolaristesting');

		cy.get('form > paper-button')
			.click();

		isInWelcomeScreen();
	});
	
	it('Logs in as guest after typing in details manually', function() {
		cy.get('form > paper-input[name="username"]')
			.shadowType('guest');

		cy.get('form > paper-input[name="password"]')
			.shadowType('anonymous');

		cy.get('form > paper-button')
			.click();

		isInWelcomeScreen();
	});

	it('Logs in as guest after clicking the Demo button', function() {
		cy.get('paper-button.iconified')
			.click();

		isInWelcomeScreen();
	});

	it('Logs out after clicking the logout button', () => {
		//login
		cy.get('paper-button.iconified')
			.click();

		isInWelcomeScreen();

		//logout
		cy.get('user-panel paper-menu-button')
			.click();

		cy.contains('Log out')
			.click();

		cy.url().should('contain', '#login')
			.then(() => {
				var authData = JSON.parse(localStorage.getItem('__amplify__authorizationData'));
				expect(authData).to.be.null;
			});
	});

	function isInWelcomeScreen() {
		cy.contains('please activate an organisation', { 'timeout': 10000 });
	}
});

