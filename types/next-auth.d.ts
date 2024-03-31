import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
  }
}

// change type of User and Session in callback
declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;
    username: string;
  }

  interface Session {
    user: {
      username: string;
      id: string;
    } & DefaultSession["user"];
  }
}
