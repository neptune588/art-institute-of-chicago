import axios from "axios";
import qs from "qs";

export const api = axios.create({
  baseURL: "https://api.artic.edu/api/v",
  paramsSerializer: (params) =>
    qs.stringify(params, { arrayFormat: "brackets" }),
});

export const imgApi = axios.create({
  baseURL: "https://www.artic.edu/iiif/2/",
  paramsSerializer: (params) =>
    qs.stringify(params, { arrayFormat: "brackets" }),
});

const errorMessage = {
  400: "잘못된 요청입니다.",
  401: "인증 실패입니다.",
  403: "권한이 없습니다.",
  404: "찾을 수 없는 페이지입니다.",
  500: "서버 오류입니다.",
  etc: "에러가 발생했습니다.",
};

//api.interceptors.request.use((res) => res.data, null);
api.interceptors.response.use(
  (res) => res.data,
  (error) => {
    if (error.response && error.response.status === 400) {
      localStorage.setItem(
        "errorData",
        JSON.stringify({
          errorCode: 400,
          errorMessage: error.message,
          pageMessage: errorMessage[400],
        })
      );
    } else if (error.response && error.response.status === 401) {
      localStorage.setItem(
        "errorData",
        JSON.stringify({
          errorCode: 401,
          errorMessage: error.message,
          pageMessage: errorMessage[401],
        })
      );
    } else if (error.response && error.response.status === 403) {
      localStorage.setItem(
        "errorData",
        JSON.stringify({
          errorCode: 403,
          errorMessage: error.message,
          pageMessage: errorMessage[403],
        })
      );
    } else if (error.response && error.response.status === 404) {
      localStorage.setItem(
        "errorData",
        JSON.stringify({
          errorCode: 404,
          errorMessage: error.message,
          pageMessage: errorMessage[404],
        })
      );
    } else if (error.response && error.response.status === 500) {
      localStorage.setItem(
        "errorData",
        JSON.stringify({
          errorCode: 500,
          errorMessage: error.message,
          pageMessage: errorMessage[500],
        })
      );
    } else {
      console.error(`${errorMessage.etc} ${error.message}`);
      localStorage.setItem(
        "errorData",
        JSON.stringify({
          errorCode: null,
          errorMessage: error.message,
          pageMessage: errorMessage[etc],
        })
      );
    }
    window.location.href = "/src/pages/error.html";
  }
);
