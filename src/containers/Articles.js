import React, { Component } from "react";
import Search from "../components/Articles/ArticleSearch";
import Feed from "../components/Articles/ArticleFeed";

class Articles extends Component {
  render() {
    return (
      <div>
        <Search />
        <Feed />
      </div>
    );
  }
}

export default Articles;
