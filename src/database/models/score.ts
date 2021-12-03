'use strict';
import { Sequelize, DataTypes, Model } from "sequelize";


 module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
	  score.belongsTo(models.user, { foreignKey: 'userId', as: 'user' });
	  score.belongsTo(models.game, { foreignKey: 'gameId', as: 'game' });

    }


  };
  score.init({
    score: {type:DataTypes.INTEGER, allowNull:false},
	userId:{ type:DataTypes.INTEGER, allowNull:false},
	gameId:{ type:DataTypes.INTEGER, allowNull:false},
}, {
    sequelize,
    modelName: 'score',
  });
  return score;
};

