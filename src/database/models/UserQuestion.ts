'use strict';
import { Sequelize, DataTypes, Model } from "sequelize";


 module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class UserQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
	 static associate(models:any) {
		// define association here
		UserQuestion.belongsTo(models.user, { foreignKey: 'userId', as: 'user' });
  
		UserQuestion.hasMany(models.question, {
		  as: 'question',
		  foreignKey: 'questionId',
		  onDelete: 'CASCADE',
		  onUpdate: 'CASCADE',
		});
  
	  }

  };
  UserQuestion.init({
	  userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
	gameId: DataTypes.INTEGER,
   }, {
    sequelize,
    modelName: 'UserQuestion',
  });
  return UserQuestion;
};


