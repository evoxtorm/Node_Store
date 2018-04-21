const mongoose = require('mongoose');
const Store = mongoose.model('Store');


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

exports.createStore = async (req, res) => {
  //res.json(req.body);
  const store = new Store(req.body);
  await store.save();
  res.redirect('/');
  // Promise example
  // store
  //   .save()
  //   .then(store => {
  //     res.json(store);
  //   })
  //   .catch(err => {
  //     throw Error(err);
  //   })
    console.log('It worked');
};
