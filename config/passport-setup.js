const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
  new GoogleStrategy({
    callbackURL: '/google/redirect',
    clientID:
      '44529193329-22iiak01u3eh564d35g4s1ojnhl07lp5.apps.googleusercontent.com',
    clientSecret: '9UuCfJdXdEHINwjrM0g_OHXL',
  },
  (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      // do something with the profile.
  },
)
)
