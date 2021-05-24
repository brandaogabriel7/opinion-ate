import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => ({ restaurants: state.restaurants.records });

export default connect(mapStateToProps)(RestaurantList);
export { RestaurantList };
