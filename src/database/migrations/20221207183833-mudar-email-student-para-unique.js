module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'students',
      'email',
      {
        type: Sequelize.STRING,
        allowNUll: false,
        unique: true,
      },
    );
  },
};
