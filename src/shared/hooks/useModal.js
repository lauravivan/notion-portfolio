import { isClickedElOnRefEl } from "util/util";

export default function useModal() {
  const body = document.body;

  function hideModal(ref) {
    if (ref && ref.value) {
      ref.value.style.display = "none";
      ref.value.style.pointerEvents = "";
      body.style.pointerEvents = "auto";

      body.removeEventListener("click", handleGlobalClick.bind(null, ref));
      body.removeEventListener("touchstart", handleGlobalClick.bind(null, ref));
    }
  }

  function showModal(ref) {
    if (ref && ref.value) {
      setTimeout(() => {
        ref.value.style.display = "block";
        body.style.pointerEvents = "none";
        ref.value.style.pointerEvents = "auto";
      }, 250);
    }
  }

  function handleGlobalClick(ref, e) {
    const res = isClickedElOnRefEl(ref.value, e.target);
    const refDisplay = ref.value.style.display;

    if (refDisplay == "block" && !res) {
      hideModal(ref);
    }
  }

  function addModaListener(ref) {
    body.addEventListener("click", handleGlobalClick.bind(null, ref));
    body.addEventListener("touchstart", handleGlobalClick.bind(null, ref));
  }

  return {
    showModal,
    hideModal,
    addModaListener,
  };
}
