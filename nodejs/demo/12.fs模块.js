var fs = require("fs");

fs.readFile("./static/1.md", function(err, data) {
    if (err) throw err;
    console.log(data.toString());
})


fs.writeFile("./static/2.md", "今天学nodejs 好神奇啊，竟然可以往文件写东西！", function(err) {
    if (err) throw err;
    // console.log(data.toString());
})

fs.appendFile('./static/2.md', '呵呵，我来写东西了，不会覆盖你的，我是追加到里面的！嘿嘿', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
});