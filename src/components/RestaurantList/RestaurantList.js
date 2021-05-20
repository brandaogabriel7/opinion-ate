import { Fragment, useEffect } from 'react';

const RestaurantList = ({ loadRestaurants, restaurants }) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <Fragment>
      <ul>
        {restaurants &&
          restaurants.map((r, index) => <li key={index}>{r.name}</li>)}
      </ul>
    </Fragment>
  );
};

export { RestaurantList as default, RestaurantList };
