export const errorService = (error) => {
  let message = "";
  // server responded with error code
  if (error.response) {
    message = `Error code: ${error.response.status}. ${error.response.data}`;
  }
  // no response was received
  else if (error.request) {
    console.log(error.request);
  }
  // something else
  else {
    console.log(`Error: ${error.message}`);
  }
  return message;
};
