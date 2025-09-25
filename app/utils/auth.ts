import bcrypt from "bcryptjs";

const verifyPassword = async (password: string, hashPassword: string) => {
  const isValid = await bcrypt.compare(password, hashPassword);
  return isValid;
};


export {verifyPassword}