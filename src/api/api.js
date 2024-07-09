import { api, imgApi } from "@/utils/axios";

export const getArtworks = async (params = "") => {
  const url = "/artworks";
  const response = api.get(url, { params });
  return response;
};

export const getArtworksSearch = (params) => {
  const url = "/artworks/search";
  const response = api.get(url, { params });
  return response;
};

export const getExhibitions = (params = "") => {
  const url = "/exhibitions";
  const response = api.get(url, { params });
  return response;
};

export const getExhibitionsSearch = (params) => {
  const url = "/exhibitions/search";
  const response = api.get(url, { params });
  return response;
};

export const getArtists = (params = "") => {
  const url = "/agents";
  const response = api.get(url, { params });
  return response;
};

export const getArtistsSearch = (params) => {
  const url = "/agents/search";
  const response = api.get(url, { params });
  return response;
};

export const getImages = (params = "") => {
  const response = imgApi.get("", { params });
  return response;
};
