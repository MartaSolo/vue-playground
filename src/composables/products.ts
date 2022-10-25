import { ref } from "vue";
import { useApi } from "@/composables/api.js";

export function useProducts() {
  const { response: products, request } = useApi(
    "https://dummyjson.com/products"
  );

  const loaded = ref(false);

  if (loaded.value === false) {
    request();
    loaded.value = true;
  }

  return { products };
}
