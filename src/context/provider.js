import { useReducer } from 'react';
import actions from './actions';
import Context from './context';
import reducer from './reducers';

const initState = {
  isDoctorsLoading: false,
  isServiceLoading: false,
  doctors: [],
  services: [],
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const applicationActions = actions(dispatch, state);
  return <Context.Provider value={{ state, ...applicationActions }}>{children}</Context.Provider>;
};

export default Provider;
