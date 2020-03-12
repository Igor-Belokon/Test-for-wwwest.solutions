import { LOGIN, DELETE_WALL, successAction } from "../types";
const initialState = {
  data: {}
};

export default function Login(state = initialState, action) {
  switch (action.type) {
    case successAction(LOGIN):
      console.log(action);
      return {
        data: action.data
      };

    default:
      return state;
  }
}
