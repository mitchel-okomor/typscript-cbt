'use strict';
import {QueryInterface} from 'sequelize'

module.exports = {
  up: async (queryInterface:QueryInterface, Sequelize:any) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return await queryInterface.addColumn(
      'answers', // name of Source model
      'questionId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'questions', // name of Target model
          key: 'id' // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    );
  },

  down: async (queryInterface:QueryInterface, Sequelize:any) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeColumn(
      'answers', // name of Source model
      'questionId' // key we want to remove
    );
  }
};
