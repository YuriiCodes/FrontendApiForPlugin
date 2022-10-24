import axiosInstance from "./http-common";
import {AddLead} from "../../types/pipedrive/pipedriveInput.type";
import {createLeadPipedriveResponse} from "../../types/pipedrive/create-lead-pipedrive-response";
import {FindPersonsPipedriveResponse} from "../../types/pipedrive/search-persons-pipedrive-response";
import {AddLeadWithExistingPerson} from "../../types/pipedrive/addLeadWithExistingPerson";

export class PipedrivePersonsService {
    public static createLead(leadData: AddLead): Promise<createLeadPipedriveResponse> {
        return axiosInstance.post("validateClientForm", leadData)
            .catch((error) => {
                return error;
            })
    }
    public static createLeadWithExistingPerson(leadData: AddLeadWithExistingPerson){
     return axiosInstance.post("leads", leadData)
                .catch((error) => {
                 return error;
                })
    }

    public static findPersonsByTerm(term: string): Promise<FindPersonsPipedriveResponse> {
        return axiosInstance.get(`persons/find/ + ${term}`)
            .catch((error) => {
                return error;
            })
    }
}