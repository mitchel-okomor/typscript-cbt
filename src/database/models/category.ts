'use strict';
import { Sequelize, DataTypes, Model } from "sequelize";


module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  };
  category.init({
    title: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'category',
  });
  return category;
};

