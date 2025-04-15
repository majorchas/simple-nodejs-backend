const User = require("../models/User.model");

// this service create user for mongodb
module.exports.createSampleUser = async ({
  userName,
  userPassword,
  userPasswordSalt,
}: sampleUser) => {
  const newUser = new User({
    username: userName,
    password: userPassword,
    salt: userPasswordSalt,
  });
  return await newUser.save();
};

interface sampleUser {
  userName: string;
  userPassword: string;
  userPasswordSalt: string;
}

export {};
