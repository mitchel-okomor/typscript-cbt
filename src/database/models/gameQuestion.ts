'use strict';
import { Sequelize, DataTypes, Model } from "sequelize";


 module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class GameQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
	 static associate(models:any) {
		// define association here
	GameQuestion.belongsTo(models.user, { foreignKey: 'userId', as: 'user' });
		GameQuestion.belongsTo(models.question, { foreignKey: 'questionId', as: 'question' });
		GameQuestion.belongsTo(models.answer, { foreignKey: 'answerId', as: 'answer' });
		GameQuestion.belongsTo(models.game, { foreignKey: 'gameId', as: 'game' });

  
	  }

  };
  GameQuestion.init({
	  userId:{type: DataTypes.INTEGER, allowNull: false},
    questionId: {type: DataTypes.INTEGER, allowNull: false},
	answerId:{type: DataTypes.INTEGER, allowNull: false},
	gameId: {type: DataTypes.INTEGER, allowNull: false},
   }, {
    sequelize,
    modelName: 'gameQuestion',
  });
  return GameQuestion;
};


