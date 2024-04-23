import { inject } from "vue";

export default function useToggle(provideName) {
  const toggleRef = inject(provideName);

  function toToggle() {
    const toggleClass = "toggle-btn--active";
    if (toggleRef && toggleRef.value) {
      toggleRef.value.classList.toggle(toggleClass);
    }
  }

  return {
    toggleRef: toggleRef,
    toToggle,
  };
}
