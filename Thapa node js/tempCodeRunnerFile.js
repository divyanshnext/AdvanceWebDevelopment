fs.readFile("sample.txt","utf-8", (err,data) => {
    console.log(data);
    console.log(err);
});