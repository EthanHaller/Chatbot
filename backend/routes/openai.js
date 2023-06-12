const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    organization: "org-FuqpZTpOUzEAJuXK1Gb8eiZW",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = openai