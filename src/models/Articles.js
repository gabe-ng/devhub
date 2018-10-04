import axios from "axios";

export default class ArticleModels {

    static searchQuery(topic) {
        let url = `https://hn.algolia.com/api/v1/search_by_date?query=${topic}&tags=story`;
        let request = axios.get(url);

        return request;
    }

    static initalLoad() {
        let url = `https://hn.algolia.com/api/v1/search_by_date?tags=story`;
        let request = axios.get(url);

        return request;
    }
}