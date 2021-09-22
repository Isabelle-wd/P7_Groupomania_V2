module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        role: {
            type: DataTypes.ENUM("user", "admin"),
            defaultValue: "user",
          },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },    
        fullName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: true,
        },          

    });

   /*  Users.associate = (models) => {
        Users.hasMany(models.Posts, {
            onDelete: "cascade",
        });
        Users.hasMany(models.Comments, {
            onDelete: "cascade",
          });          
        Users.hasMany(models.Likes, {
          onDelete: "cascade",
        });
        
    }; */
   
    return Users;
}; 