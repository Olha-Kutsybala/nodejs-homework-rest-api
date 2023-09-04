const ElasticEmail = require("@elasticemail/elasticemail-client");
require("dotenv").config();

const { ELASTIC_API_KEY, EMAIL_FROM } = process.env;

const defaultClient = ElasticEmail.ApiClient.instance;

const { apikey } = defaultClient.authentications;
apikey.apiKey = ELASTIC_API_KEY;

const emailsApi = new ElasticEmail.EmailsApi();

const sendEmail = async (data) => {
  const email = { ...data, From: EMAIL_FROM };
  await emailsApi.emailsPost(email);
  return true;
};
// const email = ElasticEmail.EmailMessageData.constructFromObject({
//   Recipients: [new ElasticEmail.EmailRecipient("lafic23473@viperace.com")],
//   Content: {
//     Body: [
//       ElasticEmail.BodyPart.constructFromObject({
//         ContentType: "HTML",
//         Content: "<strong>Test email</strong>",
//       }),
//     ],
//     Subject: "Test email",
//     From: EMAIL_FROM,
//   },
// });

// const callback = function (error, data, response) {
//   if (error) {
//     console.error(error.message);
//   } else {
//     console.log("API called successfully.");
//   }
// };
// api.emailsPost(email, callback);

module.exports = sendEmail;
