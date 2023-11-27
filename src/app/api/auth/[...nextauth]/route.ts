// src/app/api/auth/[...nextauth].ts
// note this is NextJS 13 with App Router

import NextAuth from "next-auth";
import authOptions from "./authOptions";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
