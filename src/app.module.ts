import { Module } from '@nestjs/common';
import { MongooseModule} from '@nestjs/mongoose';



@Module({
    imports: [ MongooseModule.forRoot('mongodb+srv://Thomas:qxA9r0BXtQFX8aAD@cluster0.ceagtjz.mongodb.net/?retryWrites=true&w=majority')],
})

export class AppModule {}
