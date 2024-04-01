//import from libraries
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

//internal imports
import User from "@/modules/models/User";
import { connectMongoDB } from "@/modules/mongodb/mongodb";
import { CredentialsType } from "../types/types";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { username, password } = credentials as CredentialsType; //get values

        //check validity
        if (!username || !password) {
          return null;
        }

        try {
          await connectMongoDB(); //connect to mongodb
          const user = await User.findOne({ username }); //find user

          //check is password correct
          const isCorrectPasswords = await bcrypt.compare(
            password,
            user.password
          );

          if (!isCorrectPasswords) {
            return null;
          }

          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          // add to token values
          ...token,
          id: user.id,
          username: user.username,
        };
      }
      return token;
    },
    async session({ session, token }) {
      // add to session values
      session.user.id = token.id;
      session.user.username = token.username;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};
