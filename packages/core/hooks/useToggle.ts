import { inject, type Ref, ref } from "vue";

export default function useToggle({
  provideName,
  isActive,
}: {
  provideName: string;
  isActive: boolean;
}) {
  const active = ref(isActive);

  const toggleRef = inject<Ref<boolean>>(provideName, ref(false));

  function toToggle() {
    active.value = !active.value;

    if (toggleRef && toggleRef.value) {
      toggleRef.value = active.value;
    }
  }

  return {
    toToggle,
    active,
  };
}
