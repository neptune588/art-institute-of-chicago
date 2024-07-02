
export const getAllArtworks = async () => {
  const url = '/artworks';
  const response = await api.get(url)
  return response
};

export const getArtworks = async (params) => {
  const url = '/artworks/search';
  const response = await api.get(url, {params})
  return response
};