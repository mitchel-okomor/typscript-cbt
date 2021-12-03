'use strict';
import { Sequelize, DataTypes, Model } from "sequelize";


 module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
	  Game.belongsToMany(models.user, { through: 'userGame'});

	  models.user.belongsToMany(models.game, { through: 'userGame'});

    }

  };
  Game.init({
    turn: DataTypes.INTEGER,
	winner: DataTypes.INTEGER,
    status: {
        type: DataTypes.ENUM,
        values: [
          'pending',
          'started',
          'ended',
        ],
        defaultValue: 'pending',
        allowNull: false,
      },
	  inviteStatus: {
        type: DataTypes.ENUM,
        values: [
          'pending',
          'accepted',
          'declined',
        ],
        defaultValue: 'pending',
        allowNull: false,
      },
	}, {
    sequelize,
    modelName: 'game',
  });
  return Game;
};


