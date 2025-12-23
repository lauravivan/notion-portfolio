import { provide, ref } from "vue";

export default function useModal({ provideName }: { provideName: string }) {
  const body = document.body;
  const modalRef = ref<HTMLDivElement | null>(null);

  provide(provideName, modalRef);

  function hideModal() {
    if (modalRef.value && modalRef.value) {
      modalRef.value.style.display = "none";
      modalRef.value.style.pointerEvents = "";
      body.style.pointerEvents = "auto";

      body.removeEventListener("click", handleGlobalClick);
      body.removeEventListener("touchstart", handleGlobalClick);
    }
  }

  function showModal() {
    setTimeout(() => {
      if (modalRef.value && modalRef.value) {
        modalRef.value.style.display = "block";
        body.style.pointerEvents = "none";

        modalRef.value.style.pointerEvents = "auto";

        addModalListener();
      }
    }, 250);
  }

  function handleGlobalClick(e: PointerEvent | TouchEvent) {
    if (modalRef.value && modalRef.value) {
      const res = Array.from(modalRef.value.querySelectorAll("*")).some(
        (child) => child === e.target
      );

      const refDisplay = modalRef.value.style.display;

      if (refDisplay == "block" && !res) {
        hideModal();
      }
    }
  }

  function addModalListener() {
    body.addEventListener("click", handleGlobalClick);
    body.addEventListener("touchstart", handleGlobalClick);
  }

  return {
    showModal,
    hideModal,
    addModalListener,
  };
}
