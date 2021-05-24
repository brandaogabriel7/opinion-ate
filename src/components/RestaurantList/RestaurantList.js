import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadRestaurants } from '../../store/restaurants/actions';

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

const mapDispatchToProps = { loadRestaurants };

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
export { RestaurantList };
