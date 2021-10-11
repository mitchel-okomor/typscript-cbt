'use strict';
import { Sequelize, DataTypes, Model } from "sequelize";


 const questionModel = (sequelize:Sequelize, DataTypes:any) => {
  class question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
	  question.belongsTo(models.Categories, { foreignKey: 'categoryId', as: 'category' });

    }
  };
  question.init({
    title: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'question',
  });
  return question;
};

export default questionModel;