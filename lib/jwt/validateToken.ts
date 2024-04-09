import { logger } from "../../shared/logger";
import jwt, { Secret } from "jsonwebtoken";

/**
 *
 * @param {String} token
 * @returns {String} decodedToken
 */
const validateToken = async (token: string) => {
  // Need to read this from a configuration file
  if (!process.env.API_SECRET) {
    throw new Error("JWT API Secret string is not configured in ENV file");
  }

  const apiSecret: Secret = process.env.API_SECRET;

  let userDetails: any;
  try {
    userDetails = jwt.verify(token, apiSecret);
    // let user: any = userDetails.user;
    let user: any = userDetails;
    let reqDetails = { uid: user.id, name: user?.first_name || 'need_to_be_added_in_jwt_token', user_id: user.id };
    return reqDetails;
  } catch (e) {
    // Token is invalid.
    logger.error(`Error occurred during auth validation: ${e}`);
    return null;
  }
};

export default validateToken;