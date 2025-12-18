import express from 'express';
import { getUsersRouter } from "./router";
import { UsersServiceClient } from "../../proto/user/UsersService";

const PORT = 8091;

const spawnAPI = (client: UsersServiceClient) => {
    const app = express();
    app.use('/users', getUsersRouter(client));

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export { spawnAPI };