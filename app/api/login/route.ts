import { NextResponse } from "next/server";
import User from "@/models/users";
import dbConnect from "@/lib/mongodb";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
dbConnect();
class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomError";
  }
}
export async function POST(request: Request, response: Response) {
  const { email, password } = await request.json();
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          error: "No User Exists",
        },
        {
          status: 400,
        }
      );
    }
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        {
          error: "Password do not match. Try Again",
        },
        {
          status: 400,
        }
      );
    }
    // createtoken data
    const tokenData = {
      id: user._id,
      name: user.firstName,
      email: user.email,
    };

    const tokenKey = "realestate";
    const token = await jwt.sign(tokenData, tokenKey, { expiresIn: "2min" });

    const response = NextResponse.json({
      message: "OK",
      status: 200,
      data: {
        login:true
      },
    });
    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
    });
    return response;
  } catch (err: any) {
    if (err instanceof CustomError) {
      return NextResponse.json({
        message: "Custom Error",
        status: 400,
        error: err,
      });
    } else if (err instanceof CustomError) {
      return NextResponse.json({
        message: "Not Found",
        status: 404,
        error: err,
      });
    } else {
      return NextResponse.json({
        message: "Internal Server Error",
        status: 500,
        error: err,
      });
    }
  }
}
