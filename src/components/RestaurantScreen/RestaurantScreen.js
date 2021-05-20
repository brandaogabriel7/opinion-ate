import RestaurantList from '../RestaurantList/RestaurantList';

const RestaurantScreen = () => (
  <div>
    <h2>Restaurants</h2>
    <RestaurantList loadRestaurants={() => {}} />
  </div>
);

export default RestaurantScreen;
