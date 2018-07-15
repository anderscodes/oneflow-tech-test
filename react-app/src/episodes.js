import React, { Component } from 'react';

class Episodes extends Component {
  constructor() {
    super();
      this.state = {
        episodes: []
      };
  }


  componentDidMount(){

    fetch('/episodes')
    .then(results => {
      return results.json();
    }).then(data => {
      let episodes = data.episodes.map((episodes) => {
        return (
          <div className="episode-grid">
          <h3 className="episode-text">{episodes.name}</h3>
          <img src={episodes.image.medium} className="image" />
          </div>
        )
      });
      this.setState({ episodes: episodes});
    })
  };

  render() {

    return (
      <div>
        {this.state.episodes}
      </div>
    );
  }
}

export default Episodes;
