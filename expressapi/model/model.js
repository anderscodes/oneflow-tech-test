var siliconValley = require('../silicon-valley.json')

function model (season) {
  let result = siliconValley._embedded.episodes.map((episode) => {
    if (episode.season == season){
      return episode
    }
  })
  return result
}

module.exports = model;
