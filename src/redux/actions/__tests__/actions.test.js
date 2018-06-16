import { saveComment } from "redux/actions";
import { SAVE_COMMENT } from "redux/actions/types";

describe("saveComment action creator", () => {
  it("has the correct type", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("has the correct payload", () => {
    const action = saveComment("comment");
    expect(action.payload).toEqual("comment");
  });
});
