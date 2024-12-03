// app/api/auth/[...nextauth]/route.ts

import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Create the handler for the NextAuth API route
const authOptions = {
  providers: [
    GoogleProvider({
      clientId: '251261460194-10vpm5o5gnj9fon8p75s9k3arp83vf9r.apps.googleusercontent.com',
      clientSecret: "9273b859674609e33653cda5e4b0a13e0ad9adb52eff22f207bfeed405d25816",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

};
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, authOptions);
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, authOptions);
}
