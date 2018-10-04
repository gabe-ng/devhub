import React, { Component } from "react";
import Search from "../components/Articles/ArticleSearch";
import Feed from "../components/Articles/ArticleFeed";

class Articles extends Component {
  state = {
    articleResults: []
  };

  handleSearch = results => {
    this.setState({ articleResults: results })
  }

  render() {
    return <div>
        <Search saveResults={this.handleSearch} />
        <Feed articles={this.state.articleResults} />
      </div>;
  }
}

export default Articles;
