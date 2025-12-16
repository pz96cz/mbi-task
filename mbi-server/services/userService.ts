import { User } from "../proto/user/User";
import DatabaseService from "./databaseService";
import databaseService from "./databaseService";
import { UserResponse } from "../proto/user/UserResponse";
import {UsersResponse} from "../proto/user/UsersResponse";
import {GetUsersBatchRequest} from "../proto/user/GetUsersBatchRequest";

interface IUserService {
    insertUser(user: User): Promise<UserResponse>;
    insertUsers(users: User[]): Promise<UsersResponse>;
    getUsers(batchRequest: GetUsersBatchRequest): Promise<UsersResponse>
}

interface IPaginationResponse  {
    first: number | null;
    prev: number | null;
    last: number;
    pages: number;
    items: number;
    data: User[];
}

const isEmailAlreadyTaken = async (email: string | undefined): Promise<boolean> => {
    try {
        const { data } = await DatabaseService.select<User[]>('users', `email=${email}`);

        return !!data.length;
    }
    catch (err) {
        return false;
    }
}

const UserService: IUserService = {
    /**
     * This function checks whether user with provided email exists, if not it performs an insert and
     * returns the record from db.
     *
     * @param user user to be inserted, id is ignored
     */
    insertUser: async (user: User) => {
        try {
            const { email } = user;
            const isEmailTaken = await isEmailAlreadyTaken(email);

            if (!isEmailTaken) {
                const { data } = await databaseService.insert<User>('users', {id: undefined, ...user});

                return {
                    user: data,
                    errors: [] as string[]
                }
            }

            return {
                user: null,
                errors: [`User with email: ${email} already exists.`]
            }
        }
        catch (err) {
            return {
                user: null,
                errors: [JSON.stringify(err)]
            }
        }
    },
    insertUsers: async (users: User[]): Promise<UsersResponse> => {
        try {
            const errors = [];
            const insertedUsers: User[] = [];

            for (const user of users) {
                const { email } = user;

                if (!email) {
                    errors.push('Email not provided.');
                    continue;
                }

                const isEmailTaken = await isEmailAlreadyTaken(email);

                if (!isEmailTaken) {
                    const { data } = await databaseService.insert<User>('users', {id: undefined, ...user});

                    insertedUsers.push(data);
                }
                else {
                    errors.push(`User with email: ${email} already exists.`);
                }

            }

            return {
                users: insertedUsers,
                errors
            }
        }
        catch (err) {
            return {
                users: [],
                errors: [`There was an error when performing batch insert. Details: ${err}`]
            }
        }
    },
    getUsers: async (batchRequest: GetUsersBatchRequest): Promise<UsersResponse> => {
        try {
            const { limit, offset } = batchRequest;
            const { data : paginationResponse } = await DatabaseService.select<IPaginationResponse>('users', `&_page=${offset}&_per_page=${limit}&_sort=email&_order=asc`);

            return {
                users: (paginationResponse as IPaginationResponse).data,
                errors: []
            }
        }
        catch (err) {
            return {
                users: [],
                errors: [`There was an error when getting users. Details: ${err}`]
            }
        }

    }
}

export default UserService;