import {PipedrivePersonsService} from "./services/pipedrive/pipedrivePersons.service";
import {UserInfoService} from "./services/userInfo/userInfo.service";



export const API = {
     pipedrive: PipedrivePersonsService,
     users: UserInfoService
}