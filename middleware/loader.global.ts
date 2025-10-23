import { useLoader } from "@/composables/useLoader";

export default defineNuxtRouteMiddleware((to, from) => {
  const nuxtApp = useNuxtApp();
  const { showLoader, hideLoader } = useLoader();

  if (!from?.fullPath) return;

  showLoader();

  nuxtApp.hook("page:finish", () => {
    hideLoader();
  });
});
