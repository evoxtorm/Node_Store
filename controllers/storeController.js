exports.myMiddleware = (req, res, next) => {
  req.name = 'Hitesh';
  next();
};

exports.homepage = (req, res) => {
  res.render('index');
};
