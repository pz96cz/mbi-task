import fs from "node:fs/promises";

interface IImportService {
    import(filePath: string): Promise<[]>
}

export const ImportService: IImportService = {
    async import(filePath: string): Promise<[]> {
        const file = await fs.readFile(filePath, 'utf-8');

        return JSON.parse(file);
    }
}