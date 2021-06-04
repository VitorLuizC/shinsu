type AnimationContextValue = {
  time: number;
  operations: Set<FrameRequestCallback>;
};

export default AnimationContextValue;
