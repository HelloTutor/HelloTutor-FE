import jwt from "jsonwebtoken";
export const decodeToken = (token: string) => {
  try {
    const decodeToken = jwt.decode(token);
    return decodeToken;
  } catch (error) {
    console.log("Error decoding Token : ", error);
    return null;
  }
};
