import { User } from "../proto/user/User";
import DatabaseService from "./databaseService";
import databaseService from "./databaseService";

interface IUserService {
    insertUser(user: User): Promise<User>;
}

const isEmailAlreadyTaken = async (email: string | undefined): Promise<boolean> => {
    try {
        const { data } = await DatabaseService.select<User>('users', `email=${email}`);

        return !data.length;
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
     * @param user
     */
    insertUser: async (user: User): Promise<User> => {
        const { email } = user;

        const isEmailTaken = await isEmailAlreadyTaken(email);

        if (!isEmailTaken) {
            const { data } = await databaseService.insert<User>('users', {id: undefined, ...user});

            return data;
        }

        return {}
    }
}

export default UserService;