import metadata from "./metadata";
import TestPage from "./pages/test-page.vue";

export default function loadTest() {
  if (metadata) {
    metadata.pages["test-page"] = {
      id: "test-page",
      path: "/test-page",
      title: "Test 😊",
      component: TestPage,
    };
  }
}
