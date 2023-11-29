import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account }) {
      // console.log("user", user);
      // console.log("account", account);

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
        } catch (error) {
          console.log(error);
        }
      }
      return user;
    },
  },
};
