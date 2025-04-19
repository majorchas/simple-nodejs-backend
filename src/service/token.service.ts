const jwt = require("jsonwebtoken");

// this service create JWT Token
module.exports.createJWTkey = async ({ userName }: createJWTkey) => {
  return jwt.sign(
    {
      userName: userName,
      date:Date(),
    },
    process.env.JWTSECRETKEY
  );
};

interface createJWTkey {
  userName: string;
}

export {};
