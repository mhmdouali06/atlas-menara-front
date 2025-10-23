export const useLoader = () => {
  const isLoading = useState<boolean>("__global_loader__", () => false);

  const showLoader = () => {
    isLoading.value = true;
  };
  const hideLoader = () => {
    isLoading.value = false;
  };

  // Handy wrapper for async actions
  const withLoader = async <T>(fn: () => Promise<T>) => {
    showLoader();
    try {
      return await fn();
    } finally {
      hideLoader();
    }
  };

  return { isLoading, showLoader, hideLoader, withLoader };
};
