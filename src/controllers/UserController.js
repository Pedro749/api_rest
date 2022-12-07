import User from '../models/User';

class UserController {
  async store(request, response) {
    try {
      const newUser = await User.create(request.body);
      const { id, name, email } = newUser;

      return response.json({ id, name, email });
    } catch (e) {
      return response.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }

  async update(request, response) {
    try {
      const idUser = request.userId;
      const user = await User.findByPk(idUser);

      if (!user) {
        return response.status(400).json({
          errors: ['User not found'],
        });
      }

      const userUpdated = await user.update(request.body);
      const { id, name, email } = userUpdated;

      return response.json({ id, name, email });
    } catch (e) {
      return response.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }

  async delete(request, response) {
    try {
      const id = request.userId;
      const user = await User.findByPk(id);

      if (!user) {
        return response.status(400).json({
          errors: ['User not found'],
        });
      }

      await user.destroy();

      return response.json(null);
    } catch (e) {
      return response.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }
}

export default new UserController();
