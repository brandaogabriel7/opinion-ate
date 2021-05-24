describe('Listing restaurants', () => {
  it('shows restaurants from the server', () => {
    const pastaPlace = 'Pasta Place';
    const saladPlace = 'Salad Place';

    cy.server({ force404: true });
    cy.route({
      method: 'GET',
      url:
        'https://outside-in-dev-api.herokuapp.com/IbErSDKHrI5r75t97S2Rn8MoKTXGQjWg/restaurants',
      response: [
        { id: 1, name: pastaPlace },
        { id: 2, name: saladPlace }
      ]
    });

    cy.visit('/');
    cy.contains(pastaPlace);
    cy.contains(saladPlace);
  });
});
