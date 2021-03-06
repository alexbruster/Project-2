'use strict';

module.exports = {
  requireFieldsSignUp (req, res, next) {
    const { username, password, name } = req.body;
    if (!username || !password || !name) {
      req.flash('validation', 'Missing fields');
      res.redirect(`/auth/${req.path}`);
      return;
    }
    next();
  },
  requireFieldsLogIn (req, res, next) {
    const { username, password } = req.body;
    if (!username || !password) {
      req.flash('validation', 'Missing fields');
      res.redirect(`/auth/${req.path}`);
      return;
    }
    next();
  },
  requireLogged (req, res, next) {
    if (!req.session.currentUser) {
      res.redirect('/auth/signup');
      return;
    }
    next();
  },
  requireAnon (req, res, next) {
    if (req.session.currentUser) {
      res.redirect('/profile');
      return;
    }
    next();
  }
};
