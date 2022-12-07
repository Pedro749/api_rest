import Student from '../models/Student';

class StudentController {
  async index(request, response) {
    const students = await Student.findAll();

    response.json(students);
  }
}

export default new StudentController();
