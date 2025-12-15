import { User } from "../proto/user/User";
import DatabaseService from "./databaseService";
import databaseService from "./databaseService";
import { UserResponse } from "../proto/user/UserResponse";
import {UsersResponse} from "../proto/user/UsersResponse";

interface IUserService {
    insertUser(user: User): Promise<UserResponse>;
    insertUsers(users: User[]): Promise<UsersResponse>;
}

const isEmailAlreadyTaken = async (email: string | undefined): Promise<boolean> => {
    try {
        const { data } = await DatabaseService.select<User>('users', `email=${email}`);

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
    }
}

export default UserService;