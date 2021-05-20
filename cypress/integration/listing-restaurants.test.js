describe('Listing restaurants', () => {
  it('shows restaurants from the server', () => {
    const sushiPlace = 'Sushi Place';
    const pizzaPlace = 'Pizza Place';

    cy.intercept(
      'https://outside-in-dev-api.herokuapp.com/IbErSDKHrI5r75t97S2Rn8MoKTXGQjWg/restaurants',
      'GET',
      (_) => [
        { id: 1, name: sushiPlace },
        { id: 2, name: pizzaPlace }
      ]
    );

    cy.visit('/');
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
