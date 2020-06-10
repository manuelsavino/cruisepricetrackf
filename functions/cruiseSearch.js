const axios = require("axios");
const API_ENDPOINT =
  "https://www.carnival.com/CruiseSearch/api/search?numAdults=2&pageNumber=1&pageSize=8&pastGuest=true&showBest=true&sort=fromprice&useSuggestions=true";

exports.handler = async (event, context) => {
  try {
    response = await axios.get(API_ENDPOINT);
  } catch (err) {
    console.log(err);
    return {
      statusCode: err.statusCode || 500,
      body: response,
    };
  }
  console.log(response);
  return {
    statusCode: 200,
    body: response,
  };
};
