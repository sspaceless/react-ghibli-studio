import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const clientId = process.env.GOOGLE_CLIENT_ID;
const secret = process.env.JWT_SECRET;

if (!clientSecret) {
  throw Error("No client secret");
}

if (!clientId) {
  throw Error("No client ID");
}

export const authOptions = {
  secret,
  providers: [GoogleProvider({ clientId, clientSecret })],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
