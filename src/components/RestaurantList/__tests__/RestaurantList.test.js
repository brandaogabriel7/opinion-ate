import { render, screen } from '@testing-library/react';
import { RestaurantList } from '../RestaurantList';

describe('RestaurantList should', () => {
  let loadRestaurants;

  beforeEach(() => {
    loadRestaurants = jest.fn().mockName('loadRestaurants');
  });

  it('load restaurants on first render', () => {
    render(<RestaurantList loadRestaurants={loadRestaurants} />);

    expect(loadRestaurants).toHaveBeenCalled();
  });

  describe('display the restaurants', () => {
    const testCases = [
      [
        [
          { id: 1, name: 'Sushi Place' },
          { id: 2, name: 'Pizza Place' }
        ]
      ],
      [
        [
          { id: 1, name: 'Burger Place' },
          { id: 2, name: 'Sushi Place' },
          { id: 3, name: 'Mexican food Place' }
        ]
      ]
    ];

    it.each(testCases)('display the restaurants %j', (restaurants = []) => {
      render(
        <RestaurantList
          loadRestaurants={loadRestaurants}
          restaurants={restaurants}
        />
      );

      const restaurantListItems = screen.getAllByRole('listitem');
      expect(restaurantListItems.length).toBe(restaurants.length);

      restaurantListItems.forEach((r, index) => {
        expect(r.textContent).toBe(restaurants[index].name);
      });
    });
  });
});
