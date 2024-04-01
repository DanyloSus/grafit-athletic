//import from libraries
import NextAuth from "next-auth/next";

//internal imports
import { authOptions } from "@/modules/next-auth/authOptions";

//next-auth settings
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
