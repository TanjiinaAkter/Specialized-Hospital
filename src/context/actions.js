import constant from './constant';

const {
  DOCTORS_DATA_FETCH_SUCCESS,
  SERVICES_DATA_FETCH_SUCCESS,
  TOGGLE_COURSE_LOADER,
  TOGGLE_SERVICE_LOADER,
} = constant;
const main = (dispatch) => {
  const methods = {};
  methods.fetchCoursesData = async () => {
    dispatch({
      type: TOGGLE_COURSE_LOADER,
    });

    try {
      const res = await fetch('/doctors.json');
      const data = await res.json();

      dispatch({
        type: DOCTORS_DATA_FETCH_SUCCESS,
        payload: data,
      });
      dispatch({
        type: TOGGLE_COURSE_LOADER,
      });
    } catch (error) {
      console.log({ error });
      dispatch({
        type: TOGGLE_COURSE_LOADER,
      });
    }
  };
  methods.fetchServicesData = async () => {
    dispatch({
      type: TOGGLE_SERVICE_LOADER,
    });

    try {
      const res = await fetch('/service.JSON');
      const data = await res.json();

      dispatch({
        type: SERVICES_DATA_FETCH_SUCCESS,
        payload: data,
      });
      dispatch({
        type: TOGGLE_SERVICE_LOADER,
      });
    } catch (error) {
      console.log({ error });
      dispatch({
        type: TOGGLE_SERVICE_LOADER,
      });
    }
  };
  return methods;
};

export default main;
