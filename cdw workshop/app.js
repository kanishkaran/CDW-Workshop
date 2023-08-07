// const model = require('./model.js');
// console.log(model.data1);/

const fs = require('fs');

const data = fs.readFileSync("sample.json", (err, data) => {
    if(err)
    {
        console.log(err);
    }
    // console.log(data.toString());
});

console.log(data.toString());
console.log('data fetched');

const fruits = {
    "name": "apple",
    "quantity": 5
}

const write = fs.writeFile('sample1.json', JSON.stringify(fruits),(err) =>{
    if(err)
    {
        console.log(err);
    }
})

console.log('data written');