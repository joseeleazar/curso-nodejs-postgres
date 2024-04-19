'use strict';

const { UserSchema } = require('../db/models/user.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn('users', 'role', UserSchema.role);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('users', 'role');
  }
};
