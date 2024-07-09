const error = JSON.parse(localStorage.getItem("errorData"));

const errorCode = document.getElementById("error-code");
const errorMessage = document.getElementById("error-message");

errorCode.textContent = error.errorCode;
errorMessage.textContent = error.pageMessage;

console.error(error.message);
/* console.error(console.error(localStorage.getItem("errorData")))
 */
