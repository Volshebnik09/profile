import { sequelize } from "../settings/sequelize";
import {
  DataTypes,
  Model,
  Optional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

type Roles = {
  
}

type UserAttributes = {
  id: string;
  login: string;
  password: string;
};

type UserCreationAttributes = Optional<UserAttributes, "id">;

class User extends Model<UserAttributes, UserCreationAttributes> {
  public static async createRandom() {
    await this.create({
      login: "asfasf",
      password: "asfas",
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
  },
  {
    sequelize,
  }
);

export default User;
