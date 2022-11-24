class HomeController {
  index(request, response) {
    response.json({
      tudoCerto: true,
    });
  }
}

export default new HomeController();
