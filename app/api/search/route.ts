import { NextResponse } from "next/server";
import { dataArray } from "../../../lib/datas";

class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomError";
  }
}
export async function POST(request: Request, response: Response) {
  const data = await request.json();

  const Searchdata = dataArray.find(item => function (){
    return item.specifications.room === data 
  }
  );

  try {
    return NextResponse.json({
      message: "OK",
      status: 200,
      data: Searchdata,
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
