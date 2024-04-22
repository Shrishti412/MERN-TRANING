//http://localhost:1400/ //terminal received

// const http = require('http')

// const server =http.createServer((req,res) => {
//         console.log("Received");
//         console.log(req.url);
//         res.writeHead(200, {

//                 'content-type': 'text/html'

//         })
//         res.end("<h2>Hello</h2> <h4>Hello H4</h4>"); //Only takes in string

// });
// server.listen(1400,() =>{
//         console.log("CHECKED");
// });

//NPM nodemon
//http node.js
//status quote in http communication

//(Making html body)
// const http = require ('http')
// //const fs =require('fs);

// const data =fs.readFileSync("./data.json")

//cd .. is used to comeback one directory.

// //readfilesync
// // we can write this line as=
//  const fs = require('fs');
// // const fs = require('node:fs');

//  const data =fs.readFileSync('./myreadme.txt',{encoding:'utf-8'});
//  //to change buffer into particular styring -----
//  //one way is through encodinmg and second way is by using .toString()

//  //convert buffer to sting= data.toString();
// //  console.log(data.toString());

// console.log(data);

/* Buffer(global) */

//will give in hexadecimal.
// const b= new Buffer.from('abc');
// // console.log(b);
// console.log(b.toString());
// b.write('other');
// console.log(b.toString());

//write something in file
// const fs= require('fs');
// fs.writeFileSync('./myreadme.txt',"10th April 2024:Day 7");

//  const fs = require('fs');
//  console.log("start");
// const data =fs.readFileSync('./myreadme.txt',{encoding:'utf-8'});
//  console.log(data);
//  console.log("end");

//blocking and non blocking behaviour

//  const fsPromises = require('fs/promises');
//  console.log('start');
//   const pr=fsPromises.readFile('./myreadme.txt',{encoding:'utf-8'});
//   console.log(pr);
//   pr.then((res)=>{

//     console.log(res);
//   })
//   console.log('end');
//   console.log(pr);

//callback in filesystem

// const fs= require('fs');
// const data =fs.readFileSync('./myreadme.txt',{encoding:"utf-8"},(err,data)=>{
//     console.log(data);

// });

//http://localhost:1400/
// const http = require('http');
// const app= http.createServer((req,res)=>{
//     console.log('Request Recieved');
//     console.log(req.url);
//     res.writeHead(200,{
//         'content-type':'text/html',
//     })
//     res.end("<h1  >Hello! </h1>");
// })
// app.listen(1600,()=>{
//     console.log('.....................server started.........');
// }) //1000<=local host <=9999

// const http = require('http');
// // const fs=require('fs');
// // const data = fs.readFileSync('./data.json','utf8');

// // convert json string into object in javascript
// const dataobj=JSON.parse(data);
// const products=dataobj.products;
// console.log(dataobj)
// const htmlTemplate=`<!DOCTYPE HTML>
// <html lang ="en">
//    <head>
//     </head>
//     <style>
//     .product-card{
//         max-width:500px;
//         margin:20px auto;
//         border:3px double brown;
//         border-radius:50%;
//         padding:16px;
//         display:felx;
//         justify-content:center;
//         text-align:center;
//         background-color:pink;

//     }
//     </style>
//      <body>
//           products_cards
//      </body>

// </html>

// `

// const cardTemplate=`
// <div class='product-card'>
// <h4>Title</h4>
// <p>Info</p>
// </div>`

// // const card1=cardTemplate.replace('Title',products[0].title)

// //                         .replace('Info',products[0].description );

// // const card2=cardTemplate.replace('Title',products[1].title)

// // .replace('Info',products[1].description );

// // const card3=cardTemplate.replace('Title',products[2].title)

// //                         .replace('Info',products[2].description );
// //   const allcards=card1+card2+card3;

// const allcards=products.map((elem)=>{
//     let newcard=cardTemplate;
//     newcard=newcard.replace('Title',elem.title);
//     newcard=newcard.replace('Info',elem.description);
//     return newcard;

// })

// const page=htmlTemplate.replace('products_cards',allcards)

// // const page=htmlTemplate.replace('products_cards',cardTemplate);

// const app= http.createServer((req,res)=>{

//     console.log(req.url);
//     res.writeHead(200,{ 'content-type':'text/html',
//     })
//     res.end(page);
// });
// app.listen(1600,()=>{
//     console.log('.....................server started.........');
// }) //1000<=local host <=9999

// // ---------------------------
// //npx nodemon script

// const fs = require('fs')

// const data = fs.readFileSync('./myReadMe.txt', {encoding: 'utf8'});

// console.log(data.toString());

// const b = new Buffer.from('abc');

// console.log(b)

// const fs = require('fs');

// fs.writeFileSync('./logs.txt', 'Checking');

// console.log(data.toString());
// console.log('end');

//promise api, synchronous api, async api
//file stream in node

// const topromise = require('fs/promises');
// const pr = topromise.readFile('./myReadMe.txt', {encoding: 'utf-8'})
// console.log('start')
// pr.then((res) => {
//     console.log(res);
// })
// console.log('end');

// const fs = require('fs')
// fs.readFile('./myReadMe.txt', { encoding: 'utf8' }, (err,data) => {
//     console.log(data);
// });

// const http = require('http')

// const server = http.createServer((req, res) => {
//     console.log("Received");
//     console.log(req.url);
//     res.writeHead(200, {
//         'content-type': 'text/html'
//     })
//     res.end("<h2>HELLO</h2><h4>Hello H4</h4>"); //only takes in string
// });

// server.listen(1400, () => {
//     console.log("CHECKED");
// });

//npm nodemon
//http nodejs
//status quote in http communication

const http = require("http");

const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    CHECK

    <script src="script.js"></script>
</body>
</html>`;

const cardTemplate = `
    <div class='product-card'>
        <h3>TITLE</h3>
        <p>PARAGRAPH</p>
        <img src = "X">
    </div>
`;

const fs = require("fs");
const data = fs.readFileSync("./data.json", "utf-8");

const dataObj = JSON.parse(data);

// for (i = 0; i < dataObj.products.length; i++) {
//   const template = cardTemplate;

// }

const allCards = dataObj.products.map((element) => {
  const everyCard = cardTemplate;

  const card = everyCard
    .replace("TITLE", element.title)
    .replace("PARAGRAPH", element.description)
    .replace("X", element.thumbnail);

  return card;
});

const page = htmlTemplate.replace("CHECK", allCards);

const server = http.createServer((req, res) => {
  console.log("Received");
  console.log(req.url);
  res.writeHead(200, {
    "content-type": "text/html",
  });
  res.end(page); //only takes in string
});

server.listen(1400, () => {
  console.log("Up and Running...");
});
