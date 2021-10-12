import passport from 'passport';

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const db = require('../../database/models');



const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.ACCESS_TOKEN_SECRET,
  algorithms: ['RS256'],
};

const User = db.Users;
const strategy = new JwtStrategy(options, async (payload: any, done:Function) => {
	console.log(payload)

  try {
    const user = await User.findOne({
      where: {
        id: payload.id,
      },
    });
    const loggedInUser = user?.dataValues;
    if (user) {
      return done(null, loggedInUser);
    }
    return done(null, false);
  } catch (err) {
    console.log(err);
  }
});

passport.use(strategy);

export const requireAuth = passport.authenticate('jwt', { session: false });
