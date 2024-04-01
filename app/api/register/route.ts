//import from libraries
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

//internal imports
import { connectMongoDB } from "@/modules/mongodb/mongodb";
import User from "@/modules/models/User";

export async function POST(req: NextRequest) {
  await connectMongoDB(); //connect mongodb

  const data = await req.json(); //get data

  const { username, password } = data; //destructor

  if (
    // server side validation
    !username ||
    !password ||
    username.trim() === "" ||
    password.trim() === ""
  ) {
    return NextResponse.json(
      { message: `Data is not correct` },
      { status: 422 }
    );
  }

  const hashedPasword = await bcrypt.hash(password, 10); //hash password

  //update data with hashed password
  const newData = {
    ...data,
    password: hashedPasword,
  };

  try {
    await User.create(newData); //create user

    console.log("User is created");

    return NextResponse.json({ message: "User is created" }, { status: 201 });
  } catch (error) {
    console.log("User is not created");

    return NextResponse.json(
      { message: `User is not created ${error}` },
      { status: 502 }
    );
  }
}
