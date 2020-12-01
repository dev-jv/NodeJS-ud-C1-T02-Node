// Requireds
const fs = require('fs');
// const express = require('express');
// const fs = require('./fs');

let base = 2;
let data = '';

for(let i = 1; i<16; i++){
    data += `${base} * ${i} = ${base*i}\n`;
}

fs.writeFile(`tablas/T-${base}.txt`, data, (err) => {
  if (err) throw err;
  console.log(`The file T-${base} has been created`);
});



