const { writeFile } = require("fs");
const { join } = require("path");
const rp = require('isomorphic-fetch');

let filePath = join(__dirname, "popular-articles.json");

rp("https://reddit.com/r/popular.json")
.then(res => res.json())
.then(({ data: { children } }) => {
  console.log(children);
  let articles = [];
  for (let article of children) {
    articles.push({
      url: article.data.url,
      title: article.data.title,
      author: article.data.author,
    });
  }
  writeFile(filePath, JSON.stringify(articles), (err) => {
    if (err) return console.error(err);
    console.log("Article info received!");
    });
})
.catch((err) => console.error(err));
