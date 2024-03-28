const useVisible = () => {
  const toggleVisibility = (ref) => {
    const refVisibility = ref.value.style.visibility;

    if (ref && refVisibility) {
      if (refVisibility === "hidden") {
        ref.value.style.visibility = "visible";
      } else {
        ref.value.style.visibility = "hidden";
      }
    }
  };

  const setVisibilityToNone = (ref) => {
    if (ref && ref.value) {
      ref.value.style.visibility = "hidden";
    }
  };

  const setVisibilityToBlock = (ref) => {
    if (ref && ref.value) {
      ref.value.style.visibility = "visible";
    }
  };

  return {
    toggleVisibility,
    setVisibilityToBlock,
    setVisibilityToNone,
  };
};

export default useVisible;
