import type State from './State';

function getInitialState(): State {
  return {
    paddle: {
      position: {
        x: 0,
      },
    },
  };
}

export default getInitialState;
