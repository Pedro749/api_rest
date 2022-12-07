import Student from '../models/Student';

class StudentController {
  async index(request, response) {
    const students = await Student.findAll();

    response.json(students);
  }

  async show(request, response) {
    try {
      const { id } = request.params;

      if (!id) {
        return response.status(400).json({
          errors: ['Missing Id'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return response.status(400).json({
          errors: ['Student not found'],
        });
      }

      return response.json(student);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async store(request, response) {
    try {
      const student = await Student.create(request.body);

      return response.json(student);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;

      if (!id) {
        return response.status(400).json({
          errors: ['Missing Id'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return response.status(400).json({
          errors: ['Student not found'],
        });
      }
      const newStudent = await student.update(request.body);

      return response.json(newStudent);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;

      if (!id) {
        return response.status(400).json({
          errors: ['Missing Id'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return response.status(400).json({
          errors: ['Student not found'],
        });
      }

      await student.destroy();

      return response.json({ deleted: true });
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new StudentController();
