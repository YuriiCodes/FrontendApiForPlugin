import axiosInstance from "./http-common";
import {AddApiToken} from "../../types/apiToken.type";

export class ApiTokenService {
    public static get(id: string) {
        return axiosInstance.get<AddApiToken>(`/apiTokens/${id}`)
            .catch(error => {
                return error;
            })
    }

    public static create(token: AddApiToken) {
        return axiosInstance.post<AddApiToken>('/apiTokens', token)
            .catch(error => {
                return error;
            })
    }
    public static update(token: AddApiToken) {
        return axiosInstance.patch<AddApiToken>('/apiTokens', token)
            .catch(error => {
                return error;
            })
    }

    public static delete(id: string) {
        return axiosInstance.delete<AddApiToken>(`/apiTokens/${id}`)
            .catch(error => {
                return error;
            })
    }
}