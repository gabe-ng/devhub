import axios from "axios";

export default class JobModel {

    static searchGithub(title, location) {
        let url = `https://jobs.github.com/positions.json?description=${title}&location=${location}`;
        let request = axios.get(url);

        return request;
    }

    static searchGlassdoor(title, location) {
        let url = "";
        let request = axios.get(url);

        return request;
    }
}