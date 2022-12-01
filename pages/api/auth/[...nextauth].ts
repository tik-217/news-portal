import NextAuth from "next-auth/next";
import sequelize from "../../../server/connection";
import EmailProvider from "next-auth/providers/email";
import SequelizeAdapter from "@next-auth/sequelize-adapter";

export default NextAuth({
  // https://next-auth.js.org/providers/overview
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: SequelizeAdapter(sequelize),
});
