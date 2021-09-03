const fs = require("fs");
//Create
fs.mkdirSync("new_folder");
fs.writeFileSync("new_folder/new_file.txt", "Some content. ");

//Update
fs.appendFileSync("new_folder/new_file.txt", "Added Some more content");

//Read
// const data = fs.readFileSync("new_folder");
const data = fs.readFileSync("new_folder", "utf-8");
console.log(data);
//rename
fs.renameSync("new_folder/new_file.txt", "new_folder/renamed_file.txt");

//Delete
fs.unlinkSync("new_folder/renamed_file.txt");
fs.rmdirSync('new_folder');
