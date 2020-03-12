import { WALL, DELETE_WALL, successAction } from "../types";
const initialState = {
  data: [{ theme: "loco", massage: "coco" }]
};

export default function Wall(state = initialState, action) {
  switch (action.type) {
    case successAction(WALL):
      console.log(action);
      return {
        ...state,
        data: [...state.data, action.data]
      };

    default:
      return state;
  }
}
