import axiosInstance from "./http-common";
import {userInfo} from "../../types/apiToken.type";

export class UserInfoService {
    public static get(id: string) {
        return axiosInstance.get<userInfo>(`/userInfo/${id}`)
            .catch(error => {
                return error;
            })
    }

    public static create(info: userInfo) {
        return axiosInstance.post<userInfo>('/userInfo', info)
            .catch(error => {
                return error;
            })
    }
    public static update(info: userInfo) {
        return axiosInstance.patch<userInfo>('/userInfo', info)
            .catch(error => {
                return error;
            })
    }

    public static delete(id: string) {
        return axiosInstance.delete<userInfo>(`/userInfo/${id}`)
            .catch(error => {
                return error;
            })
    }
}