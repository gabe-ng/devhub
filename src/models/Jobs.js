import axios from "axios";

export default class JobModel {

    static searchGithub(title, location) {

    // encode
    title = encodeURIComponent(title.trim());
    location = encodeURIComponent(location.trim());
      
    let githubApi = `https://jobs.github.com/positions.json?description=${title}&location=${location}`;
    let url = 'https://jsonp.afeld.me/?url=' + encodeURIComponent(githubApi);

    let request = axios.get(url);

    return request;
    }

    // static searchGlassdoor(title, location) {
    //     let url = "";
    //     let request = axios.get(url);

    //     return request;
    // }
}