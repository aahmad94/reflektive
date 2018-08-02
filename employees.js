const axios = require("axios");

const fetchEmployees = (callback, store) => {
  const token = "Token 65927fa2-4d09-40da-965b-2bf7d0c1b044";
  const url = "https://reflektive-interview.herokuapp.com/v1/employees";
  axios.get(url, {
    headers: {
      "Authorization": token
    }
  })
  .then(resp => callback(resp.data, store));
};

module.exports = fetchEmployees;