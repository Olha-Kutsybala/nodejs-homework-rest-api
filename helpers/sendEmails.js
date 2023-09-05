const ElasticEmail = require("@elasticemail/elasticemail-client");
require("dotenv").config();

const { ELASTIC_API_KEY, EMAIL_FROM } = process.env;

// const sendEmail = async (data) => {
//   const defaultClient = ElasticEmail.ApiClient.instance;

//   const { apikey } = defaultClient.authentications;
//   apikey.apiKey = ELASTIC_API_KEY;

//   const api = new ElasticEmail.EmailsApi();
//   const email = ElasticEmail.EmailMessageData.constructFromObject({
//     ...data,
//     From: EMAIL_FROM,
//   });

//   const callback = function (error, data, response) {
//     if (error) {
//       console.error(error.message);
//     } else {
//       console.log("API called successfully.");
//     }
//   };
//   api.emailsPost(email, callback);
// };

const sendEmail = async (data) => {
  const defaultClient = ElasticEmail.ApiClient.instance;
  const { apikey } = defaultClient.authentications;
  apikey.apiKey = ELASTIC_API_KEY;

  const api = new ElasticEmail.EmailsApi();
  const email = { ...data, FROM: EMAIL_FROM };
  await api.emailsPost(email);
  return true;
};

module.exports = sendEmail;
