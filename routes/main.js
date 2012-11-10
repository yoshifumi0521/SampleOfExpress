
/*
 * GET home page.
 */

var items = [
   { "text": "1st Post" },
   { "text": "2nd Post" }
];

//index.ejsを指定し、indexをレンダリングする。
exports.index = function(req, res){
   res.render('index', { title: "Entry list", items: items });
};

//formボタンをしたら、form.ejsをレンダリング
exports.form = function(req, res){
   res.render('form', { title: 'New Entry' })
};




