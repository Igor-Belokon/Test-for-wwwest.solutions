import { WALL, NEWS, LOGIN, successAction, failureAction } from "../types";

export function getAllNews() {
  let url =
    "http://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=626eb9a5b677419299a248b7a9b9e61c";
  let req = new Request(url);
  return dispatch =>
    fetch(req)
      .then(res => res.json())
      .then(data => dispatch({ type: successAction(NEWS), data }))
      .catch(err => dispatch({ type: failureAction(NEWS), err }));
}
export function addToWall(massage) {
  return { type: successAction(WALL), data: massage };
}
export function correctLogin(authorized) {
  return { type: successAction(LOGIN), data: authorized };
}
