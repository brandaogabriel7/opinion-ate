import { render, screen } from '@testing-library/react';
import RestaurantScreen from '../RestaurantScreen';

describe('RestaurantScreen should', () => {
  it('render correctly', () => {
    render(<RestaurantScreen />);
    expect(
      screen.getByRole('heading', { level: 2, name: /restaurants/i })
    ).toBeInTheDocument();
  });
});
