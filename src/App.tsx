import React, {useState} from 'react';
import './App.css';
import {UserInfoService} from "./API/services/userInfo/userInfo.service";

import {API} from "./API";

// @ts-ignore
window.Api = API;

function App() {
    const [searchTerm, setSearchTerm] = useState("");

    const [personId, setPersonId] = useState(-1);
    const [leadTitle, setLeadTitle] = useState("");
    return (
        <div className="App">

            <h2>Backend for storing tokens info api</h2>
            <div>
                <button onClick={async event => {
                    // const res = await UserInfoService.get("mmUserLoginTest2");
                    const res = await   API.users.get("mmUserLoginTest2")
                    console.log(res);
                }}>Get info
                </button>

                <button onClick={async event => {
                    // const res = await UserInfoService.get("mmUserLoginTest2");
                    const res = await   API.users.isDataSet("mmUserLoginTest2")
                    console.log(res);
                }}>Check if data is present
                </button>

                <button onClick={async event => {
                    const data = {
                        pipedriveApiKey: "VitaliiPipeDriveApiKey2",
                        mattermostUserId: "VitaliiMattermostId2",
                        login: "TesTLOGINFORLinkedIN2@mail.com",
                        password: "TesTPASSWORDFORLinkedIN2"
                    }
                    const res = await API.users.create(data);
                    console.log(res);
                }}>Create
                </button>


                <button onClick={async event => {
                    const data = {
                        pipedriveApiKey: "VitaliiPipeDriveApiKey2.1",
                        mattermostUserId: "VitaliiMattermostId2",
                        login: "TesTLOGINFORLinkedIN2@mail.com",
                        password: "TesTPASSWORDFORLinkedIN2",
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

            <h2> Pipedrive lead creation api demonstration</h2>
            <div>
                <button onClick={async event => {
                    const leadInfo = {
                        email: "SteveV@gmail.com",
                        name: "Steve Vozniak",
                        phone: "123454678",
                        lead_name: "A deal with APPLE??//?",
                        position: "test",
                        LinkedIn: "https://linkedin.com/debil/"};

                    const res = await API.pipedrive.createLead(leadInfo);
                    console.log(res);
                }}> Create lead
                </button>

                <div>
                    <input onChange={(e) => {
                        setSearchTerm(e.target.value);

                    }} placeholder="Enter search term"/>
                    <button onClick={async event => {
                        const res = await API.pipedrive.findPersonsByTerm(searchTerm);
                        console.log(res.data);
                    }}> Find  person by given search term
                    </button>
                </div>


                <div>
                    <input onChange={(e) => {
                        setPersonId(
                            parseInt(e.target.value)
                        );

                    }} placeholder="PersonID"/>
                    <input onChange={(e) => {
                        setLeadTitle(e.target.value);

                    }} placeholder="Lead title"/>
                    <button onClick={async event => {
                        const res = await API.pipedrive.createLeadWithExistingPerson({
                            person_id: personId,
                            lead_name: leadTitle
                        });
                        console.log(res.data);
                    }}> Add lead with existing person
                    </button>
                </div>
            </div>
        </div>


    );
}

export default App;
