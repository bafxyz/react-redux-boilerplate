module.exports = (env) => {
  return require('./config/' + env + '.js')({env});
};
