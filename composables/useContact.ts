export const useContact = () => {
  const { $api } = useNuxtApp();
  const sendRequest = async (body: any) => {
    const response = await $api("/contacts", {
      method: "POST",
      body,
    });
    return response;
  };
  const contactTravel = async (payload: any) => {
    return await $api(`/contact_travels`, {
      method: "POST",
      body: payload,
      headers: {
        "Content-Type": "application/ld+json",
      },
    });
  };

  return {
    sendRequest,
    contactTravel,
  };
};
