const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'jonh@email.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'John Doe 1',
        email: 'jonh1@email.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'John Doe 2',
        email: 'jonh2@email.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'John Doe 3',
        email: 'jonh3@email.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },

    ], {});
  },

};
