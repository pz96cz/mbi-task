import { Controller } from '@nestjs/common';
import { GrpcMethod } from "@nestjs/microservices";
import { UsersService } from "./services/users.service";
import { type User } from "../../types/user";
import {map} from "rxjs";

@Controller()
export class AppController {
    constructor(private readonly usersService: UsersService) {}

    @GrpcMethod("UsersService", "InsertUser")
    insertUser(user: Omit<User, "id">): Pick<User, "id"> {
        const dbUser = this.usersService.insertUser(user);

        dbUser.subscribe({
            next: (response) => {
                console.log(response.data.id);
                return response.data.id;
            },
            error: (err) => {
                return err;
            },
            complete: () => {

            }
        })

        return {
            id: 1
        }
    }
}
