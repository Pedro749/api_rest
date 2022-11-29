import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(request, response) {
    const { email = '', password = '' } = request.body;

    if (!email || !password) {
      return response.status(401).json({
        errors: ['Invalid credentials'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return response.status(401).json({
        errors: ['User not found'],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return response.status(401).json({
        errors: ['Invalid password'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return response.json({ token });
  }
}

export default new TokenController();
