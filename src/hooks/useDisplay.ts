const useDisplay = () => {
  const toggleDisplay = (ref) => {
    const refDisplay = ref.value.style.display;

    if (ref && refDisplay) {
      if (refDisplay === "none") {
        ref.value.style.display = "block";
      } else {
        ref.value.style.display = "none";
      }
    }
  };

  const setDisplayToNone = (ref) => {
    if (ref && ref.value) {
      ref.value.style.display = "none";
    }
  };

  const setDisplayToBlock = (ref) => {
    if (ref && ref.value) {
      ref.value.style.display = "block";
    }
  };

  return {
    toggleDisplay,
    setDisplayToBlock,
    setDisplayToNone,
  };
};

export default useDisplay;
