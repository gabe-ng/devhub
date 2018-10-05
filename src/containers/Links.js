import React, { Component } from "react";

class Links extends Component {
  render() {
    const savedContainer = {
      backgroundColor: "whitesmoke",
      minHeight: "80vh"
    }

    return <div>
        <div className="container-fluid">
          <h3 className="text-center pt-3 pb-3">Links</h3>
          <p className="text-center">
            Some helpful links for all your Developer needs.
          </p>
        </div>
        <div className="container-fluid" style={savedContainer}>
          <div className="container pt-4">
            <ul class="list-group">
              <li class="list-group-item mb-2">
                <a href="https://github.com/dypsilon/frontend-dev-bookmarks" target="_blank" rel="noopener noreferrer">
                  Frontend Dev Bookmarks
                </a>
              </li>
              <li class="list-group-item mb-2">
                <a href="https://www.keycdn.com/blog/web-development-tools" target="_blank" rel="noopener noreferrer">
                  Web Development Tools
                </a>
              </li>
              <li class="list-group-item mb-2">
                <a href="https://hackernoon.com/the-top-66-developer-resources-from-2017-e82531365e6d" target="_blank" rel="noopener noreferrer">
                  Top Developer Resources from 2017
                </a>
              </li>
              <li class="list-group-item mb-2">
                <a href="https://developers.google.com/web/" target="_blank" rel="noopener noreferrer">
                  Google Developers
                </a>
              </li>
              <li class="list-group-item mb-2">
                <a href="https://skillcrush.com/2017/06/14/web-developer-free-resources/" target="_blank" rel="noopener noreferrer">
                  Web Developer Resources
                </a>
              </li>
              <li class="list-group-item mb-2">
                <a href="https://medium.com/dvlprstash/free-resources-for-developers-dec-2017-d23eddd83f5" target="_blank" rel="noopener noreferrer">
                  Free Open Source Resources
                </a>
              </li>
              <li class="list-group-item mb-2">
                <a href="https://www.hongkiat.com/blog/web-developer-resources-compilation/" target="_blank" rel="noopener noreferrer">
                  A Mega Compilation of Developer Resources
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>;
  }
}

export default Links;
