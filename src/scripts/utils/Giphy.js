import { GIPHY_API_KEY } from "../config";

export default class Giphy {
  search(query) {
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}`)
      .then(res => { return res.json() })
      .then(res => {
        return res;
      });
  }
}