import axios from "axios";
const URL = "http://localhost:5000/api";

const getOnlyAllRegisters = async() => {

    let data = axios.get(`${URL}/getOnlyAllRegisters`);
    return data;
}


export { getOnlyAllRegisters };
