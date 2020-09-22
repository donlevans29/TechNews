const express = require('express');
const app = express();
const searchFrom = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList = document.querySelector('.news-list');

// add event listener
searchFrom.addEventListener('submit', retrieve);

retrieve data function

const proxyURL = 'https://cors-anywhere.herokuapp.com/';
// const URL = `${proxyURL}https://newsapi.com/v2/everything?q=tech&from=2020-09-20-20&sortBy=popularity&apiKey=987d7e1ac4ba4ce88043699b3c7f97df`;

var url = `'https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?'` +
          'country=us&' +
          'apiKey=987d7e1ac4ba4ce88043699b3c7f97df';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })