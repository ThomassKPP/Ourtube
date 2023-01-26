import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';


import { User, UserDocument } from './schemas/user.schema';


@Injectable()
export class UsersRepository {
    constructor( @InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async findOne(userFilterQuery : FilterQuery<User>): Promise<User> {
        return this.userModel.findOne(userFilterQuery);
    }

    async find(userFilterQuery : FilterQuery<User>): Promise<User[]> {
        return this.userModel.find(userFilterQuery);
    }

    async create(user: User): Promise<User> {
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }

    async findOneAndUpdate(userFilterQuery : FilterQuery<User>, user: Partial<User>): Promise<User> {
        return this.userModel.findOneAndUpdate(userFilterQuery, user);
    }

}
