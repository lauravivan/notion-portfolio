export const isClickedElOnRefEl = (refValue, clickedEle) => {
  if (refValue) {
    return Array.from(refValue.querySelectorAll("*")).some(
      (child) => child === clickedEle
    );
  }
};

export const isTouchDevice = () => {
  return navigator.maxTouchPoints > 1;
};
