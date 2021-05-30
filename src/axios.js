import axios from "axios";

const instance=axios.create({
    baseURL:'...'//the api url(clould function)
});
export default instance;