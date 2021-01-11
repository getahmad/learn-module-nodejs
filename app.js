function Tambah(a, b) {
  return a + b;
}
console.log("hello world");
console.log(Tambah(20, 10));

//module built in file sistem
const fs = require("fs");

fs.copyFileSync("text.txt", "text2.txt");
console.log(" text.txt was copied to text2.txt");

//package from outside
const superheroes = require("superheroes");
for (let i = 0; i < 10; i++) {
  console.log(superheroes.random());
}

//call own module
const op = require("./module");
const moduleTambah = op.tambah(10, 5);
console.log(moduleTambah);
