module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    departement: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "Other",
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    outdate: {
      type: DataTypes.STRING,
      default: "2023-05-25",
    },
    numberOfWorkers: {
      type: DataTypes.INTEGER,
      default: 5,
    },
  });

  return Post;
};
