import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../lib/mongodb";
import NextAuth from "next-auth";

export default NextAuth({
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        console.log("credentials===============", credentials);
        // let myPost = await db.collection("user").insertOne({
        //   email: credentials?.email,
        //   password: credentials?.password,
        // });
        // return {
        //   token: data,
        // };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user; // Setting token in session
      return session;
    },
  },
});
