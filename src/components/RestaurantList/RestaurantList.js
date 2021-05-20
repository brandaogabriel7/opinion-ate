import { Fragment, useEffect } from 'react';

const RestaurantList = ({ loadRestaurants }) => {
  useEffect(() => {
    if (!!loadRestaurants) {
      loadRestaurants();
    }
  }, [loadRestaurants]);

  return (
    <Fragment>
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </Fragment>
  );
};

export { RestaurantList as default, RestaurantList };
