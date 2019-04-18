const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const Usuario = require('../model/users');
const configDB = require('./database');

module.exports = function (passport) {
    let options = {}
    options.jwtFromRequest = ExtractJWT.fromAuthHeaderWithScheme('jwt')
    options.secretOrKey = configDB.database.secret;

    passport.use(new JWTStrategy(options, (jwt_payload, done) => {
        Usuario.buscarUsuarioConId(jwt_payload.usuario.id, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (!user) {
                return done(null, false);
            } else {
                return done(null, user);
            }
        });
    }));

}