import { Injectable } from '@nestjs/common';
import { GrpcMethod } from "@nestjs/microservices";

@Injectable()
export class UsersService {
    @GrpcMethod("UsersService", "InsertUser")
    insertUser(): {message: string} {
        return {
            message: 'Hey, it works'
        };
    }
}
