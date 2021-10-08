"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addConstraint("user_categories", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    queryInterface.addConstraint("user_categories", {
      fields: ["category_id"],
      type: "foreign key",
      references: {
        table: "categories",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    
    queryInterface.addConstraint("category_tags", {
      fields: ["category_id"],
      type: "foreign key",
      references: {
        table: "categories",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    queryInterface.addConstraint("category_tags", {
      fields: ["tag_id"],
      type: "foreign key",
      references: {
        table: "tags",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};

