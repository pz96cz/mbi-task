import { Controller, Get, Inject } from '@nestjs/common';
import { type ClientGrpc } from "@nestjs/microservices";

@Controller("test")
export class AppController {
    private usersService: any;

    constructor(@Inject("USER_PACKAGE") private client: ClientGrpc) {}

    onModuleInit() {
        this.usersService = this.client.getService<any>('UsersService');
    }

    @Get()
    getHello() {
        return this.usersService.insertUser({
            firstName: 'Patrik',
            lastName: 'Zapletal',
            companyName: 'MBI',
            email: 'test@email.cz',
            password: 'haShEDPWD'
        });
    }
}
