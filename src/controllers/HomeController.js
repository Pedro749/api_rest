import Student from '../models/Student';

class HomeController {
  async index(request, response) {
    const newStudent = await Student.create({
      name: 'Pedro Augusto',
      email: 'pedro@teste.com',
      age: 21,
      weight: 65.0,
      height: 1.71,
    });
    response.json(newStudent);
  }
}

export default new HomeController();
