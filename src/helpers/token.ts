import jwt, { JwtPayload } from 'jsonwebtoken';

export const SECRET_KEY = 'secret';

class TokenHelper {
  // eslint-disable-next-line
  public static sign(payload: JwtPayload): string {
    return jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        payload,
      },
      SECRET_KEY,
    );
  }

  public static verify(token: string): string | void {
    const newToken = jwt.verify(token, SECRET_KEY, (err: unknown, decoded: unknown) => {
      if (err) {
        throw err;
      } else {
        if (decoded) {
          const token = this.sign((decoded as JwtPayload).user as JwtPayload);
          return token;
        } else {
          return;
        }
      }
    });
    return newToken;
  }
}

export default TokenHelper;
