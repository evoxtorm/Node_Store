// exports.myMiddleware = (req, res, next) => {
//   req.name = 'Hitesh';
//   res.cookie('name', 'Hitesh is cool', {maxAge: 9000000});
//   next();
// };

exports.homepage = (req, res) => {
  res.render('index');
};

exports.addStore = (req, res) => {
  //res.send('It works');
  res.render('editStore', { title: 'Add Store'});
};
