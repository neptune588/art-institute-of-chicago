axios.interceptors.request.use()
axios.interceptors.response.use(
첫 번째 인자: 응답을 처리하는 콜백 함수
response => {
성공적인 응답을 처리하는 로직을 작성합니다.
예를 들어, 응답 데이터를 가공하거나 필요한 후속 작업을 수행할 수 있습니다.
return response; 위의 과정이 필요없을시 수정 없이 그대로 반환하여 다음 핸들러로 전달됨.
},

두 번째 인자: 응답에 대한 오류를 처리하는 콜백 함수
error => {
오류 응답을 처리하는 로직을 작성합니다.
예를 들어, 특정 상태 코드에 따라 다른 처리를 수행하거나 오류 메시지를 처리할 수 있습니다.
return Promise.reject(error); // 에러를 호출 코드로 전달하여 추가적인 처리를 위임합니다.
}
);
