import { Request, Response } from "express";

const userService = require("../service/user.service");

module.exports.createTestUser = async (req: Request, res: Response) => {
  try {
    const sampleUserCreate = await userService?.createSampleUser({
      userName: req?.body?.name,
      userPassword: req?.body?.password,
      userPasswordSalt: req?.body?.salt,
    });
    return res.status(200).json(sampleUserCreate);
  } catch (exception) {
    return res.status(400);
  }
};
