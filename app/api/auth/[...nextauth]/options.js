import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { data } from "autoprefixer";

export const options = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username: ",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          label: "Password: ",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        // this is where you retrieve user data from your db
        // to verify with credentials
        // docs: https://next-auth.js.org/configuration/providers/credentials
        const user = { id: "24", name: "John", password: "nextauth" };
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  // pages: {
  //     signIn: ''
  // }
  // session: {}
};
