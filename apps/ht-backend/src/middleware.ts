import { dotenv } from "dotenv";
import { jwt } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

declare global {
    namespace Express {
      interface Request {
        userID?: string;
      }
    }
}
const JWT_SECRET = proccess.env.JWT_SECRET;

export function middleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"];

  const decoded = jwt.verify(token, JWT_SECRET);

  if (decoded) {
    //ts-ignore:
    req.userID = decoded.userID;
    next();
  } else {
    res.status(403).json({
      message: "unauthorised",
    });
  }
}
