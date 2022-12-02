import VerificationToken from "./verificationToken.js";

export async function createVerifi() {
  return VerificationToken.findAll({
    raw: true
  });
}