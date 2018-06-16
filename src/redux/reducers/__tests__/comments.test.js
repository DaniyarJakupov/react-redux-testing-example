import commentsReducer from "redux/reducers/comments";
import { SAVE_COMMENT } from "redux/actions/types";

it("handles actions of type SAVE_COMMENT", () => {
  const testAction = {
    type: SAVE_COMMENT,
    payload: "Test Comment"
  };

  const newState = commentsReducer([], testAction);

  expect(newState).toEqual(["Test Comment"]);
});

it("handles actions of unknown type", () => {
  const testAction = {
    type: "NEW_TYPE",
    payload: "NEW Comment"
  };

  const newState = commentsReducer([], testAction);

  expect(newState).toEqual([]);
});
