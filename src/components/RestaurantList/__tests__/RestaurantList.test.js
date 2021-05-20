import { render, screen } from '@testing-library/react';
import { RestaurantList } from '../RestaurantList';

describe('RestaurantList should', () => {
  it('render correctly', () => {
    render(<RestaurantList loadRestaurants={() => {}} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('load restaurants on first render', () => {
    const loadRestaurants = jest.fn().mockName('loadRestaurants');

    render(<RestaurantList loadRestaurants={loadRestaurants} />);

    expect(loadRestaurants).toHaveBeenCalled();
  });
});
