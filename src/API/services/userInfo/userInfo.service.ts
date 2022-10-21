import axiosInstance from "./http-common";
import {isUserDataSubmitted, userInfo} from "../../types/apiToken.type";

export class UserInfoService {
    // get user data by id
    public static get(id: string) {
        return axiosInstance.get<userInfo>(`/users/get/${id}`)
            .catch(error => {
                return error;
            })
    }

    // returns true if we have user data in database, false if not
    public static async isDataSet(id: string) {
        const res = await axiosInstance.get<isUserDataSubmitted>(`/users/IsDataSubmitted/${id}`);
        return res.data.status;
    }

    // creates user data
    public static create(info: userInfo) {
        return axiosInstance.post<userInfo>('/users', info)
            .catch(error => {
                return error;
            })
    }

    public static update(info: userInfo) {
        return axiosInstance.patch<userInfo>('/users', info)
            .catch(error => {
                return error;
            })
    }


    public static delete(id: string) {
        return axiosInstance.delete<userInfo>(`/users/${id}`)
            .catch(error => {
                return error;
            })
    }
}