import axios from "axios";

export default axios.create({
    baseURL: "https://api.pipedrive.com/v1",
    headers: {
        "access-key": "TEST",
    },
    params: {
        api_token: "9c1ba905eeccc08eb6df0f4397b90aa7f85a6172",
    }
});