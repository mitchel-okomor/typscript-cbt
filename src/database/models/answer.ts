'use strict';
import { Sequelize, DataTypes, Model } from "sequelize";


module.exports =(sequelize:Sequelize, DataTypes:any) => {
  class answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
	//  answer.belongsTo(models.question, { foreignKey: 'questionId', as: 'question' });

    }
  };
answer.init({
    title:{type: DataTypes.STRING, allowNull:false},
	isCorrect:{type:DataTypes.BOOLEAN, defaultValue:false},
	questionId:{type:DataTypes.INTEGER, allowNull:false}
}, {
    sequelize,
    modelName: 'answer',
  });
  return answer;
};

