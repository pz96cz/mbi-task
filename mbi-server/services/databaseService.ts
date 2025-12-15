import axios, {AxiosResponse} from "axios";

const DB_HOST = 'http://localhost:3000';

interface IDatabaseService {
    insert<T>(entityName: string, entityData: T | T[]) : Promise<AxiosResponse<T>>;
    select<T>(entityName: string, selectParams?: string) : Promise<AxiosResponse<T[]>>;
}

const DatabaseService: IDatabaseService = {
    insert: (entityName, entityData) => {
        return axios.post(`${DB_HOST}/${entityName}`, entityData);
    },
    select: (entityName, selectParams) => {
        let searchUrl = `${DB_HOST}/${entityName}`;

        if (selectParams) {
           searchUrl = searchUrl.concat(`?${selectParams}`)
        }

        return axios.get(searchUrl);
    },
};

export default DatabaseService;



