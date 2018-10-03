import React, { Component } from "react";
import Search from "../components/Articles/ArticleSearch";
import Feed from "../components/Articles/ArticleFeed";

class Articles extends Component {
  state = {
    articleResults: [
      {
        name: "Article1"
      },
      {
        name: "Article2"
      },
      {
        name: "Article3"
      }
    ]
  };

  render() {
    return (
      <div>
        <Search />
        <Feed articles={this.state.articleResults}/>
      </div>
    );
  }
}

export default Articles;
