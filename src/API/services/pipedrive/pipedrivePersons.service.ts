import axiosInstance from "./http-common";
import {AddLead} from "../../types/pipedrive/pipedriveInput.type";
import {createLeadPipedriveResponse} from "../../types/pipedrive/create-lead-pipedrive-response";

export class PipedrivePersonsService {
    public static createLead(leadData: AddLead): Promise<createLeadPipedriveResponse> {
        return axiosInstance.post("validateClientForm", leadData)
            .catch((error) => {
                return error;
            })
    }
}