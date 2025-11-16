import { inject, Ref, ref } from "vue";

export default function useToggle({ provideName }: { provideName: string }) {
  const active = ref(false);

  const toggleRef = inject<Ref<boolean> | undefined>(provideName);

  function toToggle() {
    active.value = !active.value;

    if (toggleRef && toggleRef.value) {
      toggleRef.value = active.value;
    }
  }

  function handleActive(newActive: boolean) {
    active.value = newActive;
  }

  return {
    toToggle,
    active,
    toggleRef,
    handleActive,
  };
}
