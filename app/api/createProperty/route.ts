import { NextResponse } from "next/server";
import Properties from "@/models/property";
import dbConnect from "@/lib/mongodb";

dbConnect();
class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomError";
  }
}
export async function POST(request: Request, response: Response) {
  const {
    category,
    country,
    description,
    id,
    location,
    name,
    option,
    price,
    specifications: { area, bathRoom, condition, room },
  } = await request.json();
  try {
    const createdUser = await Properties.create({
      category,
      country,
      description,
      id,
      location,
      name,
      option,
      price,
      specifications: { area, bathRoom, condition, room },
      images: {
        thumbnail: "pathtothumbnailimage",
        banner: "path-to-banner-image",
        banner2: "path-to-banner2-image",
      },
      liked: true,
    });
console.log(createdUser + "created user")
    return NextResponse.json({
      message: "OK",
      status: 200,
      data:true,
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
