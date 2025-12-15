import axios, {AxiosResponse} from "axios";

const DB_HOST = 'http://localhost:3000';

interface IDatabaseService {
    insert<T>(entityName: string, entityData: T) : Promise<AxiosResponse<T>>;
    select<T>(entityName: string, selectParams: string) : Promise<AxiosResponse<T[]>>;
}

const DatabaseService: IDatabaseService = {
    insert: (entityName, entityData) => {
        return axios.post(`${DB_HOST}/${entityName}`, entityData);
    },
    select: (entityName, selectParams) => {
        return axios.get(`${DB_HOST}/${entityName}?${selectParams}`);
    },
};

export default DatabaseService;



