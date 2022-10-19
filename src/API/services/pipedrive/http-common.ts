import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3333/pipedrive",
    headers: {
        "access-key": "TEST",
    }
});