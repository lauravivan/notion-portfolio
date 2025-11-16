import { Ref } from "vue";

const useDisplay = () => {
  const toggleDisplay = (ref: Ref) => {
    const refDisplay = ref.value.style.display;

    if (ref && refDisplay) {
      if (refDisplay === "none") {
        ref.value.style.display = "block";
      } else {
        ref.value.style.display = "none";
      }
    }
  };

  const setDisplayToNone = (ref: Ref) => {
    if (ref && ref.value) {
      ref.value.style.display = "none";
    }
  };

  const setDisplayToBlock = (ref: Ref) => {
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
