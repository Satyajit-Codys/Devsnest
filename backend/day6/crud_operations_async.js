const fs = require('fs');

//create folder
fs.mkdir('new_folder', (err) => {
    console.log("folder created")
});

// create a file inside the folder
fs.writeFile('./new_folder/new_file.txt', "created a file using async", (err) =>{
    console.log("file created")
});

//Updating the file (appending the data)
fs.appendFile("./new_folder/new_file.txt", " File updation successful",(err) =>{
    console.log("file updated/appended")
});

//Read data 
fs.readFile('./new_folder/new_file.txt', 'utf-8',(err, data) =>{
    console.log(data)
});

//Rename the file

fs.rename('./new_folder/new_file.txt', './new_folder/renamed_file.txt',(err) =>{
    console.log("File renamed")
});

//delete the File
fs.unlink('./new_folder/renamed_file.txt',(err) =>{
    console.log("file deleted")
});

//delete the Directory
fs.rmdir('./new_folder', (err) =>{
    console.log("folder deleted")
});
