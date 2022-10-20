import React from 'react';
import './App.css';
import {UserInfoService} from "./API/services/userInfo/userInfo.service";
import {PipedrivePersonsService} from "./API/services/pipedrive/pipedrivePersons.service";

function App() {
    return (
        <div className="App">

            <h2>Backend for storing tokens info api</h2>
            <div>
                <button onClick={async event => {
                    const res = await UserInfoService.get("mmUserLoginTest2");
                    console.log(res);
                }}>Get info
                </button>

                <button onClick={async event => {
                    const data = {
                        pipedriveApiKey: "VitaliiPipeDriveApiKey2",
                        mattermostUserId: "VitaliiMattermostId2",
                        login: "TesTLOGINFORLinkedIN2@mail.com",
                        password: "TesTPASSWORDFORLinkedIN2"
                    }
                    const res = await UserInfoService.create(data);
                    console.log(res);
                }}>Create
                </button>


                <button onClick={async event => {
                    const data = {
                        pipedriveApiKey: "VitaliiPipeDriveApiKey2.1",
                        mattermostUserId: "VitaliiMattermostId2",
                        login: "TesTLOGINFORLinkedIN2@mail.com",
                        password: "TesTPASSWORDFORLinkedIN2"
                    }
                    const res = await UserInfoService.update(data);
                    console.log(res);
                }}>Update
                </button>

                <button onClick={async event => {
                    const res = await UserInfoService.delete("VitaliiMattermostId2");
                    console.log(res);
                }}>Delete
                </button>
            </div>

            <hr/>
            <h2>Pipedrive persons api demo</h2>
            <div>

                <button onClick={async event => {

                    const res = await PipedrivePersonsService.get();
                    console.log(res);
                }}>Get all persons info
                </button>


                {/*ADD PERSON*/}
                <button onClick={async event => {
                    const personInfo = {
                        name: "Elon Musk2121",
                        email: "elonmusk@tesla.com",
                        phone: "123456789"
                    }
                    const res = await PipedrivePersonsService.create(personInfo);
                    console.log(res);
                }}>Create person [name, email and phone are hardcoded into object inside function]
                </button>
            </div>
            <hr/>
            <h2> Pipedrive lead creation api demonstration</h2>
            <div>
                <button onClick={async event => {
                    const leadInfo = {
                        name: "Elon Musk2121",
                        email: "elonmusk@gmail.com",
                        phone: "123456789",
                        lead_name: "Lead title",
                    }
                    const res = await PipedrivePersonsService.createLead(leadInfo);
                    console.log(res);
                }}> Create lead
                </button>
            </div>
        </div>


    );
}

export default App;
