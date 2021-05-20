import { render, screen } from '@testing-library/react';
import { RestaurantList } from '../RestaurantList';

const NOOP = () => {};
describe('RestaurantList should', () => {
  it('load restaurants on first render', () => {
    const loadRestaurants = jest.fn().mockName('loadRestaurants');

    render(<RestaurantList loadRestaurants={loadRestaurants} />);

    expect(loadRestaurants).toHaveBeenCalled();
  });

  it('display the restaurants', () => {
    const restaurants = [
      { id: 1, name: 'Sushi Place' },
      { id: 2, name: 'Pizza Place' }
    ];

    render(<RestaurantList loadRestaurants={NOOP} restaurants={restaurants} />);

    const restaurantListItems = screen.getAllByRole('listitem');
    expect(restaurantListItems.length).toBe(restaurants.length);

    restaurantListItems.forEach((r, index) => {
      expect(r.textContent).toBe(restaurants[index].name);
    });
  });
});
