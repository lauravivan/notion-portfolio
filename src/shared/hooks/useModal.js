import { onMounted } from "vue";
import { isClickedElOnRefEl } from "util/util";

export default function useModal(modalRef) {
  const body = document.body;

  function hideModal() {
    if (modalRef.value) {
      modalRef.value.style.display = "none";
      modalRef.value.style.pointerEvents = "";
      body.style.pointerEvents = "auto";
    }

    body.removeEventListener("click", handleGlobalClick);
    body.removeEventListener("touchstart", handleGlobalClick);
  }

  function showModal() {
    if (modalRef.value) {
      modalRef.value.style.display = "block";
      body.style.pointerEvents = "none";
      modalRef.value.style.pointerEvents = "auto";

      setTimeout(() => {
        body.addEventListener("click", handleGlobalClick);
        body.addEventListener("touchstart", handleGlobalClick);
      }, 100);
    }
  }

  function handleGlobalClick(e) {
    const res = isClickedElOnRefEl(modalRef.value, e.target);

    if (!res) {
      hideModal();
    }
  }

  onMounted(() => {
    hideModal();
  });

  return {
    provideName: "modalRef",
    showModal,
    modalStyles: {
      position: "absolute",
      top: "50%",
      right: "0",
      left: "50%",
      bottom: "0",
      transform: "translate(-50%, -60%)",
      padding: "2rem 1.9rem",
    },
  };
}
