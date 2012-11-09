
/*
 * GET home page.
 */

var items = [
   { "text": "1st Post" },
   { "text": "2nd Post" }
];




//index.ejsを指定する。
exports.index = function(req, res){
  res.render('index', { title: "Entry list", items: items });
};
