import { NextResponse } from "next/server";
import User from "@/models/users";
import dbConnect from "@/lib/mongodb";
dbConnect();
class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomError";
  }
}
export async function POST(request: Request, response: Response) {
  const { createdBy } = await request.json();
  console.log(createdBy);
  const user = await User.find({ email: createdBy });
  try {
    return NextResponse.json({
      message: "OK",
      status: 200,
      data: user,
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
