class HomeController {
  async index(request, response) {
    response.json('ok');
  }
}

export default new HomeController();
