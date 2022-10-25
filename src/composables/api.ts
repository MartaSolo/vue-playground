import { ref } from "vue";

export function useApi(url: RequestInfo) {
  const data = ref();
  const error = ref();

  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((error) => (error.value = error));

  return { data, error };
}
// import { ref } from "vue";

// export function useApi(url: RequestInfo, options?: RequestInit) {
//   const response = ref();

//   const request = async () => {
//     const res = await fetch(url, options);
//     const data = res.json();
//     response.value = data;
//     // response.value = data;
//   };

//   return { response, request };
// }
