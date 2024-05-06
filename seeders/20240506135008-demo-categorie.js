'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Categories', [
      {
      name: 'Golf Clubs',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Irons',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Fairway Woods',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Drivers',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Wedges',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Accesories',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Balls',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
