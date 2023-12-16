import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./db";
import md5 from "md5";

export const authOptions = {
  site: process.env.NEXTAUTH_URL,
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",

      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const md5Password = md5(password);

        try {
          const user = await prisma.User.findUnique({
            where: {
              email: email,
            },
          });

          if (!user) {
            return null;
          }

          if (user && user.password === md5Password) {
            return user;
          }
        } catch (error) {
          console.error("Error", error);
        }
      },
    }),
    // ...add more providers here
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    signOut: "/login",
  },

  callbacks: {
    async signIn({ user, account }) {
      // storing the data to the database
      if (account.provider === "google") {
        const { name, email, image } = user;
        try {
          const res = await fetch(
            process.env.NEXTAUTH_URL + "/api/user/nextauth-signup",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: name,
                email: email,
                image: image,
              }),
            }
          );

          if (res.ok) {
            return user;
          }
        } catch (error) {}
      }
      return user;
    },
  },
};
