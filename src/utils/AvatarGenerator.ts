export const generateRandomAvatarURL = (id: string): string => {
  const baseUrl = 'https://robohash.org/';
  const size = '20x20';
  return `${baseUrl}${id}?size=${size}`;
};
