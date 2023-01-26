import { Injectable } from '@nestjs/common';
import { uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/update-user.dto';

import { UsersRepository } from './users.repository';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
    constructor (private readonly usersRepository: UsersRepository) {}

    async getUserByEmail(email: string): Promise<User> {
        return this.usersRepository.findOne({ email })
    }

    async getUserById(userId: string): Promise<User> {
        return this.usersRepository.findOne({ userId })
    }

    async getUsers(): Promise<User[]> {
        return this.usersRepository.find({})
    }
    
   async createUser(email: string, password: string): Promise<User> {
        const user = {
            userId: uuidv4(),
            email,
            password,
        };
        return this.usersRepository.create(user);
    }

    async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
        return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
}
}


