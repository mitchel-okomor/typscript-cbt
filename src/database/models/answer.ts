'use strict';
import { Sequelize, DataTypes, Model } from "sequelize";


 const answerModel = (sequelize:Sequelize, DataTypes:any) => {
  class answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
	  answer.belongsTo(models.questions, { foreignKey: 'questionId', as: 'question' });

    }
  };
answer.init({
    title: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'answer',
  });
  return answer;
};

export default answerModel;