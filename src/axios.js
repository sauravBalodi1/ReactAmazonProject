import axios from "axios";

const instance=axios.create({
    baseURL:'http://localhost:5001/project-9a751/us-central1/api'//the api url(clould function)
});
export default instance;