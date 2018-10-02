function logout(cb) {
  return fetch('/users/sign_out', {
    method: 'delete',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    }
  }).then(checkStatus)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const client = { logout };
export default client;
