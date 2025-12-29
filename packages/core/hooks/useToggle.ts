import { provide, ref } from "vue";

export default function useToggle({
  provideName,
  isActive,
}: {
  provideName: string;
  isActive: boolean;
}) {
  const active = ref(isActive);

  const toggleRef = ref<boolean>(false);

  provide(provideName, toggleRef);

  function toToggle() {
    active.value = !active.value;

    if (toggleRef.value && toggleRef.value) {
      toggleRef.value = active.value;
    }
  }

  return {
    toToggle,
    active,
  };
}
