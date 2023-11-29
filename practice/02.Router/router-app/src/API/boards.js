import axios from "axios";

// const boardList = function() {
//     return axios.get("/boards")
// }

export const boardList = () => axios.get("/boards")