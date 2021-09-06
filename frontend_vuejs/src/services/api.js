import axios from "axios";
const URL = "http://localhost:5000/api";
const api = {}

api.getOnlyAllRegisters = () => {

    let data = axios.get(`${URL}/getOnlyAllRegisters`);
    return data;
}

api.getSpecificPassword = async (id) => {
    let resp = await axios.post(`${URL}/getSpecificPassword`, { id: id });
    let data = resp.data;
    if (data.status) {
        return data.passw;
    }
    throw Error("No se pudo obtener la información");
}


export default api
