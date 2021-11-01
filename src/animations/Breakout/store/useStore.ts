import { useMemo, useReducer } from 'react';
import getInitialState from './getInitialState';
import reducer from './reducer';

function useStore() {
  const initialState = useMemo(getInitialState, []);
  return useReducer(reducer, initialState);
}

export default useStore;
