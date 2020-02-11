// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-shadow-dom';

Cypress.Commands.add("login", (username, password) => {
	if (username === undefined) {
		username = 'guest';
		password = 'anonymous';
	}
	cy.request({
		method: 'POST',
		url: 'https://skolaris.net/auth/token',
		body: {
			username: username,
			password: password,
			grant_type: 'password'
		},
		form: true
	})
		.then((response) => {
			// response.body is automatically serialized into JSON
			expect(response.body).to.have.property('access_token');
			localStorage.setItem('__amplify__authorizationData', JSON.stringify({
				'data': {
					'token': response.body.access_token,
					'username': username
				}
			}));
		});
});

Cypress.Commands.add('activateOrganisation', (id) => {
	if (id === undefined)
		id = 29144;

	var authData = JSON.parse(localStorage.getItem('__amplify__authorizationData')),
		username = authData.data.username;
	
	cy.log('Activating organisation for user ' + username);
	localStorage.setItem('__amplify__' + username + '.ttcontext.selectedorg', JSON.stringify({
		'data': id
	}));
});

