import { NextResponse } from "next/server";
import User from "@/models/users";
import dbConnect from "@/lib/mongodb";
import bcryptjs from 'bcryptjs'
dbConnect();
class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomError";
  }
}
export async function POST(request: Request, response: Response) {
  const { firstName, lastName, email, password } = await request.json();
  try {
  const user = await User.findOne({ email });
    if (user) {
        return NextResponse.json(
          {
            error: "User Already exists",
          },
          {
            status: 400,
          }
        );
      }
      const salt = await bcryptjs.genSalt(10);
      const hashPassword = await bcryptjs.hash(password,salt);
      const createdUser = await User.create({
        firstName,
        lastName,
        email,
        password:hashPassword
      })
console.log(createdUser);
    return NextResponse.json({
      message: "OK",
      status: 200,
      data:true
    });
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
