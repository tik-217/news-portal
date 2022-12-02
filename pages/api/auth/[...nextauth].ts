import NextAuth from "next-auth/next";
import EmailProvider from "next-auth/providers/email";
import SequelizeAdapter from "@next-auth/sequelize-adapter";
import sequelize from "../../../server/connection";

export default NextAuth({
  // https://next-auth.js.org/providers/overview
  providers: [
    EmailProvider({
      server: {
        host: "smtp.mail.ru",
        port: 465,
        auth: {
          user: "tigran.gabulyan.2001@mail.ru",
          pass: "8s97D7Fz5fW5xzxutTbM",
        },
      },
      from: "tigran.gabulyan.2001@mail.ru",
    }),
  ],
  adapter: SequelizeAdapter(sequelize, {
    synchronize: true,
  }),
  pages: {
    signIn: '../../sign-in',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
});
