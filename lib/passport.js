 const passport = require('passport')
 const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
 const { gameHistory } = require('../models')

 const option = {
     jwtFromRequest: ExtractJwt.fromHeader('authorization'),
     secretOrKey: 'kankajdakjdaskjajk',
 };


 passport.use(
     new JwtStrategy(option, async(payload, done) => {
         gameHistory.findByPK(payload.id)
             .then((user) => done(null, user))
             .catch((err) => done(err, false))
     })
 );

 module.exports = passport;