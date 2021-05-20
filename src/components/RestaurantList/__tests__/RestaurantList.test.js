import { render, screen } from '@testing-library/react';
import RestaurantList from '../RestaurantList';

describe('RestaurantList should', () => {
  it('render correctly', () => {
    render(<RestaurantList />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
