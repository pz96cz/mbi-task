import { Request, Router } from 'express';
import { UsersServiceClient } from "../../proto/user/UsersService";
import { GetUsersBatchRequest } from "../../proto/user/GetUsersBatchRequest";

const getUsersRouter = (client: UsersServiceClient) => {
    const router = Router();

    router.get('/', async (req: Request<any, any, any, GetUsersBatchRequest>, res) => {
        const { offset, limit } = req.query;

        if (offset && limit) {
            client.GetUsers({ offset, limit }, (err, data) => {
                if (err) {
                    res.send('Error while getting users.');
                    return;
                }

                res.send(data);
                return;
            })
        }
        else res.send(400);
    });

    return router;
}

export { getUsersRouter };


