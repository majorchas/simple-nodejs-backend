const User = require("../models/User.model");

// this service create user for mongodb
module.exports.createSampleUser = async ({
  userName,
  userPassword,
}: sampleUser) => {
  try {
    const newUser = new User({
      username: userName,
      password: userPassword,
      salt: userPassword,
    });
    return await newUser.save();
  } catch (exception) {
    return "failed" + exception;
  }
};

interface sampleUser {
  userName: string;
  userPassword: string;
}

export {};
