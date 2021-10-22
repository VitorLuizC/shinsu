const ORIGINAL_CONSOLE_LOG = window.console.log;

function isStrictModeDoubleInvokation() {
  return window.console.log !== ORIGINAL_CONSOLE_LOG;
}

export default isStrictModeDoubleInvokation;
