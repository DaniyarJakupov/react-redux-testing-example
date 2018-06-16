import { SAVE_COMMENT } from "redux/actions/types";

const INIT_STATE = [];

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};
