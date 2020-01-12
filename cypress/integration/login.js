describe('Login', function() {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Notifies about login error', () => {
	cy.get('form > paper-input[name="username"]')
		.shadowType('guest');

	cy.get('form > paper-input[name="password"]')
		.shadowType('badpassword');

	cy.get('form > paper-button')
	  .click();

  	cy.contains('user name or password is incorrect');
  });

  it('Logs in after typing in details manually', function() {
	cy.get('form > paper-input[name="username"]')
		.shadowType('guest');

	cy.get('form > paper-input[name="password"]')
		.shadowType('anonymous');

	cy.get('form > paper-button')
	  .click();

	cy.url().should('include', '/#welcome')
  });

  it('Logs in as guest after clicking the Demo button', function() {
	cy.get('paper-button.iconified')
	  .click();

	cy.url().should('include', '/#welcome')
  });

});

