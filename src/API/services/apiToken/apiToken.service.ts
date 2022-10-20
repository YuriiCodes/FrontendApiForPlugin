import axiosInstance from "./http-common";
import {AddApiToken} from "../../types/apiToken.type";

export class ApiTokenService {
    public static get(id: string) {
        return axiosInstance.get<AddApiToken>(`/userInfo/${id}`)
            .catch(error => {
                return error;
            })
    }

    public static create(token: AddApiToken) {
        return axiosInstance.post<AddApiToken>('/userInfo', token)
            .catch(error => {
                return error;
            })
    }
    public static update(token: AddApiToken) {
        return axiosInstance.patch<AddApiToken>('/userInfo', token)
            .catch(error => {
                return error;
            })
    }

    public static delete(id: string) {
        return axiosInstance.delete<AddApiToken>(`/userInfo/${id}`)
            .catch(error => {
                return error;
            })
    }
}