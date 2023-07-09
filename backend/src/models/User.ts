import { sequelize } from "../settings/sequelize";
import {
  DataTypes,
  Model,
  Optional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { randomUUID } from "crypto";

enum Roles {
  ADMIN = "ADMIN",
  USER = "USER",
}

type UserAttributes = {
  id: string;
  login: string;
  password: string;
  role: Roles;
};

type UserCreationAttributes = Optional<UserAttributes, "id">;

class User extends Model<UserAttributes, UserCreationAttributes> {
  public static Roles = Roles;

  public static async createRandom() {
    await this.create({
      login: randomUUID(),
      password: randomUUID(),
      role: this.Roles.USER,
    });
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    login: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  }
);
export default User;
