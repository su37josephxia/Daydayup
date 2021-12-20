const request = require("request");

const send = async function (url, method, params = {}, json = true) {
  return new Promise((resolve, reject) => {
    request({
        url,
        method,
        json,
        json: true,
        headers: {
          "content-type": "application/json",
        },
        body: params,
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