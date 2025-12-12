import { Controller, Get, Inject } from '@nestjs/common';
import { Observable } from "rxjs";
import { type ClientGrpc } from "@nestjs/microservices";

interface UsersService {
    insertUser({}): Observable<any>;
}

@Controller("test")
export class AppController {
    private usersService: UsersService;

    constructor(@Inject("USER_PACKAGE") private client: ClientGrpc) {}

    onModuleInit() {
        this.usersService = this.client.getService<UsersService>('UsersService');
    }

    @Get()
    getHello() {
        return this.usersService.insertUser({});
    }
}
