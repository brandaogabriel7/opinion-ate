const STORE_RESTAURANTS = 'STORE_RESTAURANTS';

const loadRestaurants = () => (dispatch, getState, api) => {
  api.loadRestaurants().then((records) => {
    dispatch(storeRestaurants(records));
  });
};

const storeRestaurants = (records) => ({
  type: STORE_RESTAURANTS,
  records
});

export { STORE_RESTAURANTS, loadRestaurants };
