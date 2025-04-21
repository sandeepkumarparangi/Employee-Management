import axios from "axios";

const REST_URL='http://localhost:8080/api/v1/employee';

export const listEmployee = () => axios.get(REST_URL);

// export const 