import { inject, type Ref, ref } from "vue";

export default function useToggle({ provideName }: { provideName: string }) {
  const active = ref(false);

  const toggleRef = inject<Ref<boolean> | undefined>(provideName);

  function toToggle() {
    active.value = !active.value;

    if (toggleRef && toggleRef.value) {
      toggleRef.value = active.value;
    }
  }

  return {
    toToggle,
    active,
    toggleRef,
  };
}
