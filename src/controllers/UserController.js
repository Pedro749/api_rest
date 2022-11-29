import User from '../models/User';

class UserController {
  async store(request, response) {
    try {
      const newUser = await User.create(request.body);
      return response.json(newUser);
    } catch (e) {
      return response.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }

  async index(request, response) {
    try {
      const users = await User.findAll();
      return response.json(users);
    } catch (e) {
      return response.json(null);
    }
  }

  async show(request, response) {
    try {
      const { id } = request.params;
      const user = await User.findByPk(id);
      return response.json(user);
    } catch (e) {
      return response.json(null);
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;

      if (!id) {
        return response.status(400).json({
          errors: ['Missing id'],
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return response.status(400).json({
          errors: ['User not found'],
        });
      }

      const userUpdated = await user.update(request.body);
      return response.json(userUpdated);
    } catch (e) {
      return response.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;

      if (!id) {
        return response.status(400).json({
          errors: ['Missing id'],
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return response.status(400).json({
          errors: ['User not found'],
        });
      }

      await user.destroy();
      return response.json(user);
    } catch (e) {
      return response.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }
}

export default new UserController();
