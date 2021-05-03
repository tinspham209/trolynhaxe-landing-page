const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfiguration = {
  target: "serverless", //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
  env: {
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
};

module.exports = withPlugins([optimizedImages], nextConfiguration);
