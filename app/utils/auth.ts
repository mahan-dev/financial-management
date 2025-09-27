import bcrypt from "bcryptjs";

const verifyPassword = async (password: string, hashPassword: string) => {
  const isValid = await bcrypt.compare(password, hashPassword);
  return isValid;
};

const hashPassword = async (password: string) => {
  const hashPass = await bcrypt.hash(password, 10);
  return hashPass
};

export { verifyPassword, hashPassword };
