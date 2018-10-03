import axios from "axios";

export default class ArticleModels {

    static searchQuery(topic) {
        let url = `http://hn.algolia.com/api/v1/search_by_date?query=${topic}`;
        let request = axios.get(url);

        return request;
    }

    static initalLoad(topic) {
        let url = `http://hn.algolia.com/api/v1/search_by_date?tags=story`;
        let request = axios.get(url);

        return request;
    }
}