const isTouchDevice = () => {
  return navigator.maxTouchPoints > 1;
}

export default isTouchDevice;