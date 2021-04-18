const request = require('request');

const options = {
  method: 'GET',
  url: 'https://movies-tvshows-data-imdb.p.rapidapi.com/',
  qs: { type: 'get-popular-movies', page: '1', year: '2020' },
  headers: {
    'x-rapidapi-key': '4a64992becmshfd7d65e809b4890p173691jsn8b7a6ad0c5a4',
    'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com',
    useQueryString: true,
  },
};
const getData = (callback) => {
  request(options, function (error, response, body) {
    if (error) {
      callback('uncorrect url', undefined);
    } else {
      const data = JSON.parse(body);
      callback(undefined, data);
    }
  });
};

module.exports = getData;
