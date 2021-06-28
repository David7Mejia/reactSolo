'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        // avatar: faker.image.avatar(),
        username: 'demo',
        firstName: 'Demo',
        hashedPassword: bcrypt.hashSync('zzzzzz'),
      },
      {
        email: faker.internet.email(),
        // avatar: faker.image.avatar(),
        username: 'FakeUser1',
        firstName: 'Fake1',
        hashedPassword: bcrypt.hashSync('zzzzzz'),
      },
      {
        email: faker.internet.email(),
        // avatar: faker.image.avatar(),
        username: 'FakeUser2',
        firstName: 'Fake2',
        hashedPassword: bcrypt.hashSync('zzzzzz'),
      },
      {
        email: faker.internet.email(),
        // avatar: faker.image.avatar(),
        username: 'david',
        firstName: 'david',
        hashedPassword: bcrypt.hashSync('zzzzzz'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2', 'david'] }
    }, {});
  }
};
