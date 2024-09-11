const {parse, Parser} = require('json2csv');
const fs = require('fs');

var info = [
    {
        "S. No.": "1",
        "Product Name": "SKU1",
        "Input Image Urls": "https://via.placeholder.com/300,https://via.placeholder.com/350,https://via.placeholder.com/400",
    },
    {
        "S. No.": "2",
        "Product Name": "SKU2",
        "Input Image Urls": "https://via.placeholder.com/300,https://via.placeholder.com/350,https://via.placeholder.com/400" },
]

const json2csvParser = new Parser();
const csv = json2csvParser.parse(info);

fs.writeFile('info.csv', csv, (err) => {
    if (err) throw err;
    console.log('file saved');
});