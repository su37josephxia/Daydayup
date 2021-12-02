const request = require("request");

const send = async function (url, method, formData = {}, json = true) {
  return new Promise((resolve, reject) => {
    request({
        url,
        method,
        json,
        formData,
      },
      async (error, _, body) => {
        if (!error) {
          resolve(body);
        } else {
          reject(error);
        }
      }
    );
  });
}

module.exports = send