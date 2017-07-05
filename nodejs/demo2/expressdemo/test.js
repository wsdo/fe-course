var comic = { name: 'one  piece' };

// 渲染文件模板,
// comic.ejs 包含 header.ejs footer.ejs, 
// 若include了文件 必须指定 filename参数 , 参数为文件路径，
// 文件所在目录为查找include资源的目录  path.diranme(specialFilepath) 
var html = ejs.render(fs.readFileSync('comic.ejs', 'utf8'), { 'comic': comic }, { filename: __dirname + '\\abc.js' });
console.log(html);