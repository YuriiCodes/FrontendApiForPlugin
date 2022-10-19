import axiosInstance from "./http-common";
import {AddLead, AddPerson} from "../../types/pipedrive/pipedriveInput.type";
import {getAllPersonsPipedriveResponse} from "../../types/pipedrive/get-all-persons-pipedrive-response";
import {createHumanPipedriveResponse} from "../../types/pipedrive/create-human-pipedrive-response";
import {createLeadPipedriveResponse} from "../../types/pipedrive/create-lead-pipedrive-response";

export class PipedrivePersonsService {
    public static get(): Promise<getAllPersonsPipedriveResponse> {
        return axiosInstance.get(`/persons`)
            .catch((error) => {
                return error;
            })
    }

    public static create(personData: AddPerson): Promise<createHumanPipedriveResponse> {
        return axiosInstance.post("persons", personData)
            .catch((error) => {
                return error;
            })
    }

    public static createLead(leadData: AddLead): Promise<createLeadPipedriveResponse> {
        return axiosInstance.post("leads", leadData)
            .catch((error) => {
                return error;
            })
    }

    public static update() {

    }

    public static delete(id: string) {

    }
}