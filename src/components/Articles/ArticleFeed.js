import React, { Component } from "react";

export default class JobFeed extends Component {
  render() {
    const feedStyle = {
      backgroundColor: "whitesmoke",
      minHeight: "80vh"
    };

    let articles = this.props.articles.map(article => {
      let date = article.created_at.slice(0, 10);
      let date2 = new Date(date);
      let date3;

      if (!isNaN(date2.getTime())) {
        // Months use 0 index.
        date3 = date2.getMonth() + 1 + '/' + date2.getDate() + '/' + date2.getFullYear();
      }

      return (
        <li className="list-group-item mb-2" key={article.created_at_i}>
        <p><a href={`${article.url}`} target="_blank" rel="noopener noreferrer">{article.title}</a></p>
        <p>Date: {date3}</p>
      </li>
     )});

    return (
      <div className="container-fluid pb-5" style={feedStyle}>
        <div className="container pt-3">
            <p className="ml-3 font-weight-bold">Recent Searches</p>
            <ul className="list-group">
                {articles}
            </ul>
        </div>
      </div>
    );
  }
}
