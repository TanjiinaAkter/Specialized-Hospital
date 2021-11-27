import constant from './constant';

const {
  TOGGLE_DOCTORS_LOADER,
  TOGGLE_SERVICE_LOADER,
  DOCTORS_DATA_FETCH_SUCCESS,
  SERVICES_DATA_FETCH_SUCCESS,
} = constant;

const reducer = (state, actions) => {
  switch (actions.type) {
    case TOGGLE_DOCTORS_LOADER:
      state = {
        ...state,
        isDoctorsLoading: !state.isDoctorsLoading,
      };
      return state;
    case TOGGLE_SERVICE_LOADER:
      state = {
        ...state,
        isServiceLoading: !state.isServiceLoading,
      };
      return state;
    case DOCTORS_DATA_FETCH_SUCCESS:
      state = {
        ...state,
        doctors: [...actions.payload],
      };
      return state;
    case SERVICES_DATA_FETCH_SUCCESS:
      state = {
        ...state,
        services: [...actions.payload],
      };
      return state;
    default:
      return state;
  }
};

export default reducer;
