import { User } from "../../proto/user/User";
import DatabaseService from "./databaseService";
import databaseService from "./databaseService";
import { UserResponse } from "../../proto/user/UserResponse";
import { UsersResponse } from "../../proto/user/UsersResponse";
import { GetUsersBatchRequest } from "../../proto/user/GetUsersBatchRequest";
import { GetUserRequest } from "../../proto/user/GetUserRequest";
import bcrypt from 'bcrypt';
import { LoginRequest } from "../../proto/user/LoginRequest";
import { LoginResponse } from "../../proto/user/LoginResponse";
import { sign } from 'jsonwebtoken'


interface IUserService {
    insertUser(user: User): Promise<UserResponse>;
    insertUsers(users: User[]): Promise<UsersResponse>;
    getUsers(batchRequest: GetUsersBatchRequest): Promise<UsersResponse>;
    getUser(userRequest: GetUserRequest): Promise<UserResponse>;
    generateJwtToken(loginRequest: LoginRequest): Promise<LoginResponse>;
}

interface IPaginationResponse  {
    first: number | null;
    prev: number | null;
    last: number;
    pages: number;
    items: number;
    data: User[];
}

const userValidation = (user: User) => {
    return user.id !== undefined && user.firstName !== undefined && user.lastName !== undefined && user.companyName !== undefined && user.email !== undefined && user.password !== undefined;
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

const hashPassword = async (password: string | undefined) => {
    if (!password) throw new Error('The password must be provided');

    return bcrypt.hash(password, 2);
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
            const { email, password } = user;
            const isEmailTaken = await isEmailAlreadyTaken(email);

            if (!isEmailTaken) {
                const hashedPwd = await hashPassword(password)
                const { data } = await databaseService.insert<User>('users', {...user, id: undefined, password: hashedPwd});

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
                    const hashedPwd = await hashPassword(user.password);
                    const { data } = await databaseService.insert<User>('users', {...user, id: undefined, password: hashedPwd});

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
            const { data : paginationResponse } = await DatabaseService.select<IPaginationResponse>('users', `_page=${(offset as number) + 1}&_per_page=${limit}&_sort=email&_order=asc`);

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
    },
    getUser: async (userRequest: GetUserRequest): Promise<UserResponse> => {
        try {
            const { userId } = userRequest;
            const { data : users } = await DatabaseService.select<User[]>('users', `id=${userId}`);

            return {
                user: (users as User[])[0],
                errors: []
            }
        }
        catch (err) {
            return {
                user: {},
                errors: [`There was an error when getting user. Details: ${err}`]
            }
        }
    },
    generateJwtToken: async (loginRequest: LoginRequest): Promise<LoginResponse> => {
        try {
            const { email, password } = loginRequest;
            const { data } = await DatabaseService.select<User>('users', `email=${email}`);

            const users = (data as User[])

            if (!users.length) {
                return {
                    token: undefined,
                    errors: ["Token couldn't be generated because the combination of email and password is not correct."]
                }
            }

            const user: User = users[0];

            const isPasswordCorrect = await bcrypt.compare(password as string, user.password as string);

            if (isPasswordCorrect) {
                const token = sign(
                    {
                        data: {
                            userId: user.id
                        }
                    },
                    'privateKey',
                    {
                        expiresIn: 60 * 60
                    }
                );

                return {
                    token,
                    errors: []
                }
            }
            else {
                return {
                    token: undefined,
                    errors: ["Token couldn't be generated because the combination of email and password is not correct."]
                }
            }
        }
        catch(err) {
            return {
                token: undefined,
                errors: [`There was an error when getting users. Details: ${err}`]
            }
        }
    }
}

export default UserService;