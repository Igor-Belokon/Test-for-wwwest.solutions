import { NEWS, successAction } from "../types";
const initialState = {
  data: { articles: [] }
};

export default function News(state = initialState, action) {
  switch (action.type) {
    case successAction(NEWS):
      console.log(action);
      return {
        data: action.data
      };

    default:
      return state;
  }
}
