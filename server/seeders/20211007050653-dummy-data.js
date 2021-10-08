'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('users', [
      {
        email: 'kimcoding@gmail.com',
        password: '1234',
        username: 'kimcoding',
        profile_image: 'pathtoimage',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'gildong@gmail.com',
        password: 'abcd',
        username: 'gildong',
        profile_image: 'pathtoimage',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    await queryInterface.bulkInsert('categories', [
      {
        name: 'movie',
        flag: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'book',
        flag: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    await queryInterface.bulkInsert('user_categories', [
      {
        user_id: 1,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    await queryInterface.bulkInsert('tags', [
      {
        name: 'harry poter',
        flag: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'lion king',
        flag: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'harry poter',
        flag: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    await queryInterface.bulkInsert('category_tags', [
      {
        category_id: 1,
        tag_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_id: 1,
        tag_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_id: 2,
        tag_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('categories', null, {});
    await queryInterface.bulkDelete('tags', null, {});
    await queryInterface.bulkDelete('user_categories', null, {});
    await queryInterface.bulkDelete('category_tags', null, {});
  },
};
