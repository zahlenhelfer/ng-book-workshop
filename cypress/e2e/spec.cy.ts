it('loads examples', () => {
  cy.visit('/');
  cy.contains('Anwendung books');
});
