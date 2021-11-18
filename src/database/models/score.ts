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
    }


  };
  score.init({
    score: DataTypes.INTEGER,
	userId: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'score',
  });
  return score;
};

