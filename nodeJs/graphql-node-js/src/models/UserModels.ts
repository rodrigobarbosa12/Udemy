import * as Sequelize from "sequelize";
import { BaseModelInterface } from "../interfaces/BaseModelInterface";
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import sequelize = require("sequelize");
import { userInfo } from "os";
import { ModelsInterface } from "../interfaces/ModelsInterface";

export interface UserAttributes {
    id?: number;
    names?: string;
    email?: string;
    password?: string;
    photo?: string;
    createdAt?: string,
    updatedAt?: string
}

export interface UserInstance extends Sequelize.Instance<UserAttributes>, UserAttributes {
    isPassword(encodadePassword: string, password: string): boolean;
}

export interface UserModel extends BaseModelInterface, Sequelize.Model<UserInstance, UserAttributes> {

}

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): UserModel => {
    const User: UserModel = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }, 
        name: {
            type: DataTypes.STRING(128),
            allowNull: false,

        }, 
        email: {
            type: DataTypes.STRING(128),
            allowNull: false,
            unique: true
        }, 
        password: {
            type: DataTypes.STRING(128),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }, 
        photo: {
            type: DataTypes.BLOB({
                length: 'long'
            }),
            allowNull: true,
            defaultValue: null
        },
    }, {
        tableName: 'users',
        hooks: {
            beforeCreate: (user: UserInstance, options: Sequelize.CreateOptions): void => {
                const salt = genSaltSync();
                user.password = hashSync(user.password, salt);
            }
        }
    });

    User.associate = (models: ModelsInterface): void => {};

    User.prototype.isPassword = (encodadePassword: string, password: string): boolean => {
        return compareSync(password, encodadePassword);
    }

    return User;
}