import axiosInstance from "./http-common";
import {AddPerson} from "../../types/pipedrivePersons.type";

export class PipedrivePersonsService {
    public static get() {
        return axiosInstance.get(`/persons`)
            .catch((error) => {
                return error;
            })
    }

    public static create(personData: AddPerson) {
        return axiosInstance.post("persons", {
            "name": personData.name,
            "email": [
                {
                    "value": personData.email,
                    "primary": false,
                    "label": "email from website form"
                }
            ],

            "phone": [
                {
                    "value": personData.phone,
                    "primary": false,
                    "label": "phone from form "
                }
            ]
        })
            .catch((error) => {
                return error;
            })
    }

    public static update() {

    }

    public static delete(id: string) {

    }
}