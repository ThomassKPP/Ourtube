import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { UsersService } from './users.service';
import { User } from './schemas/user.schema';

@Controller('users')

export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async getUsers(): Promise<User[]> {
        return this.usersService.getUsers();
    }

    @Get(':userId')
    async getUserById(@Param('userId') userId: string): Promise<User> {
        return this.usersService.getUserById(userId);
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.createUser(createUserDto.email, createUserDto.password);
    }

    @Patch(':userId')
    async updateUser(@Param('userId') userId: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.usersService.updateUser(userId, updateUserDto);
    }
}

