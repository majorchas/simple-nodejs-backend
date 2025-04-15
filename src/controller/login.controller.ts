import { Request, Response } from "express";

const userService = require("../service/user.service");

module.exports.createTestUser = async (req: Request, res: Response) => {
  try {
    const sampleusercreate = await userService?.createSampleUser({
      userName: req?.body?.name,
      userPassword: req?.body?.password,
    });
    return res.status(200).json(sampleusercreate);
  } catch (exception) {
    return res.status(400);
  }
};
