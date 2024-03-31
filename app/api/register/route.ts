import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectMongoDB } from "@/lib/mongodb/mongodb";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  await connectMongoDB();

  const data = await req.json();

  const { username, password } = data;

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

  const hashedPasword = await bcrypt.hash(password, 10);

  const newData = {
    ...data,
    password: hashedPasword,
  };

  try {
    await User.create(newData);

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
