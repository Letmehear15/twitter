import { UserModelInterface, UserSchema } from '../models/UserModel';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { cryptoHash } from '../utils/CryptoHash';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await UserSchema.findOne({
        $or: [{ email: username }, { username }],
      });
      if (!user) {
        return done(null, false);
      }

      if (user.password === cryptoHash(password + process.env.SECURITY_PASS)) {
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (error) {
      done(error, false);
    }
  })
);

passport.use(
  new JwtStrategy(
    {
      secretOrKey: process.env.SECURITY_PASS || '123',
      jwtFromRequest: ExtractJwt.fromHeader('token'),
    },
    async (payload: { data: UserModelInterface }, done) => {
      try {
        const user = await UserSchema.findById(payload.data._id);

        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.serializeUser((user: any, done: any) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  UserSchema.findById(id, (_: any, user: UserModelInterface) => {
    done(null, user);
  });
});

export { passport };
