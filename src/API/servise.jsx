import { getDataList } from "./firebase";

export default class GetDataList {
    static async getAll(resourse) {
        const response = await getDataList(resourse);
        return response;
    }
}