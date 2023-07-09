const { Sequelize, Model, DataTypes } = require("sequelize");
export const sequelize = new Sequelize(
  "postgres://test:test@postgres:5432/data"
);
