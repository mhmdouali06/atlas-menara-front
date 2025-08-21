export const useContact = () => {
  const { $api } = useNuxtApp();
   const sendRequest = async (body: any) => {
    const response = await $api('/contacts', {
      method: 'POST',
      body,
    });
    return response;
  };

  return {
    sendRequest,
  };

}