import { Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { type User } from "../../../types/user";
import {AxiosResponse} from "axios";
import {Observable} from "rxjs";

const DATABASE_URL = 'http://localhost:3000/'

@Injectable()
export class UsersService {
    constructor(private readonly httpService: HttpService) {}

    insertUser(user: Omit<User, "id">): Observable<AxiosResponse<any, Omit<User, "id">>>  {
       return this.httpService.post(DATABASE_URL + 'users', user);
    }
}
